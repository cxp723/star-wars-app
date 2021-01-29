import React, { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: ${(p) => p.rows * 100}px;
  min-width: 50%;
  justify-content: space-around;
  padding: 10px 20%;
  h1 {
    margin: 0;
  }
`;

const AddForm = React.memo(({ addFunc, title, fields }) => {
  const [values, setValues] = useState(
    fields.reduce((obj, field) => ({ ...obj, [field]: "" }), {})
  );

  function changeValue(field) {
    setValues((values) => ({
      ...values,
      [field.target.name]: field.target.value,
    }));
  }
  const submitHandler = (e) => {
    e.preventDefault();
    addFunc(values);
    setValues(fields.reduce((obj, field) => ({ ...obj, [field]: "" }), {}));
  };
  const inputs = fields.map((field) => (
    <TextInput
      value={values[field]}
      name={field}
      placeholder={`Film ${field}`}
      onChange={changeValue}
      key={field}
    />
  ));
  return (
    <FormContainer onSubmit={submitHandler} rows={fields.length}>
      <h1>{title}</h1>
      {inputs}
      <Button type="submit" green>
        Add
      </Button>
    </FormContainer>
  );
});

export default AddForm;
