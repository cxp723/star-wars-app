import { render } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import AddForm from './AddForm';

describe('testing AddForm component', () => {
  const addFunc = jest.fn();
  it('should be validated and submit correctly', async () => {
    const { getByPlaceholderText, getByText, getByRole } = render(
      <AddForm addFunc={addFunc} title="planet" fields={['name', 'diameter']} />,
    );

    const nameField = getByPlaceholderText(/name/i);
    const diameterField = getByPlaceholderText(/diameter/i);

    expect(nameField).toBeInTheDocument();
    expect(diameterField).toBeInTheDocument();

    userEvent.type(nameField, 'Al');
    userEvent.type(diameterField, 'ksjd');
    userEvent.tab();

    expect(getByText(/Should be at least 3 symbols/i)).toBeInTheDocument();
    expect(getByText(/should be number/i)).toBeInTheDocument();

    userEvent.click(getByRole('button', { name: 'Add' }));
    expect(addFunc).not.toBeCalled();

    userEvent.type(nameField, 'dabaran');
    userEvent.clear(diameterField);
    userEvent.type(diameterField, '1234');

    expect(nameField).toHaveValue('Aldabaran');
    expect(diameterField).toHaveValue('1234');

    userEvent.click(getByRole('button', { name: 'Add' }));
    expect(addFunc).toBeCalled();
  });
});
