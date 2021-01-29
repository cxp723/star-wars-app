import React from "react";
import TextField from "./TextField";
import Button from "./Button";
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
  justify-content: space-between;
`;

const AddForm = React.memo(({ addFunc, title, fields }) => {
  const inputs = fields.map((field) => (
    <Field
      key={field}
      name={field}
      render={({ input, meta }) => (
        <TextField input={input} meta={meta} title={title} field={field} />
      )}
    />
  ));

  return (
    <Form
      onSubmit={addFunc}
      validate={(values) => {
        let errors = {};
        Object.keys(values).forEach((value) => {
          if (values[value].length < 3) {
            errors[value] = "Should be at least 3 letters";
          }
        });
        return errors;
      }}
      render={({ handleSubmit, pristine, form }) => (
        <FormContainer onSubmit={handleSubmit} rows={fields.length}>
          <h1>Add {title}:</h1>
          {inputs}
          <ButtonsContainer>
            <Button type="submit" disabled={pristine} green>
              Add
            </Button>
            <Button disabled={pristine} onClick={form.reset}>
              Reset
            </Button>
          </ButtonsContainer>
        </FormContainer>
      )}
    />
  );
});

AddForm.propTypes = {
  addFunc: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AddForm;