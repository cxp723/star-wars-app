import React, { useMemo } from "react";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Field, Form } from "react-final-form";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: ${(p) => p.rows * 120}px;
  min-width: 50%;
  justify-content: space-around;
  padding: 10px 20%;
  h1 {
    margin: 0;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const isSameProps = (prevProps, nextProps) => {
  return prevProps.title === nextProps.title;
};
const AddForm = React.memo(({ addFunc, title, fields }) => {
  const inputs = useMemo(
    () =>
      fields.map((field) => (
        <Field
          key={field}
          name={field}
          render={({ input, meta }) => (
            <TextField input={input} meta={meta} title={title} field={field} />
          )}
        />
      )),
    [[...fields]]
  );

  return (
    <Form
      onSubmit={addFunc}
      validate={(values) => {
        let errors = {};
        if (values.diameter && isNaN(Number(values.diameter))) {
          errors.diameter = "Should be number";
        }
        Object.keys(values).forEach((value) => {
          if (values[value].length < 3) {
            errors[value] = "Should be at least 3 symbols";
          }
        });
        return errors;
      }}
      render={({ handleSubmit, pristine, form }) => {
        const submitFunc = (values) => {
          handleSubmit(values);
          form.reset();
        };
        return (
          <FormContainer onSubmit={submitFunc} rows={fields.length}>
            <h1>Add {title}:</h1>
            {inputs}
            <ButtonsContainer>
              <Button type="submit" disabled={pristine} green>
                Add
              </Button>
              <Button disabled={pristine} onClick={form.reset} red>
                Reset
              </Button>
            </ButtonsContainer>
          </FormContainer>
        );
      }}
    />
  );
}, isSameProps);

AddForm.propTypes = {
  addFunc: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AddForm;
