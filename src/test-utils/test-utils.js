import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { rootReducer } from '../redux/store';

function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware)),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }
  Wrapper.propTypes = { children: PropTypes.element.isRequired };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { renderWithRedux };
