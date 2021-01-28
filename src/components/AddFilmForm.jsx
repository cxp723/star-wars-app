import React, { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-around;
  padding: 10px 20%;
`;

const AddFilmForm = (props) => {
  const [values, setValues] = useState({
    title: "",
    director: "",
    producer: "",
  });
  function changeValue(field) {
    setValues((values) => ({
      ...values,
      [field.target.name]: field.target.value,
    }));
  }
  const submitHandler = (e) => {
    e.preventDefault();
    props.addFilm(values);
    debugger;
    setValues({ title: "", director: "", producer: "" });
  };
  return (
    <FormContainer onSubmit={submitHandler}>
      <h1>Add your film:</h1>
      <TextInput
        value={values.title}
        name="title"
        placeholder="Film title"
        onChange={changeValue}
      />
      <TextInput
        name="director"
        value={values.director}
        placeholder="Film director"
        onChange={changeValue}
      />
      <TextInput
        value={values.producer}
        name="producer"
        placeholder="Film producer"
        onChange={changeValue}
      />
      <Button type="submit" green>
        Add film
      </Button>
    </FormContainer>
  );
};
export default AddFilmForm;
