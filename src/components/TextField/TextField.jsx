import styled from "styled-components";
import React from "react";

const TextInput = styled.input`
  padding: 10px;
  font-size: 1.2em;
  font-weight: bold;
  outline: none;
  border: ${(p) => (p.hasError ? "2px solid red" : "1px solid grey")};
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const ErrorMessage = styled.span`
  color: red;
  position: absolute;
  bottom: -25px;
  left: 10px;
`;
const FieldContainer = styled.div`
  position: relative;
`;

export default ({ input, meta, title, field }) => {
  const hasError = meta.error && meta.touched;
  return (
    <FieldContainer>
      <TextInput
        {...input}
        placeholder={`${title} ${field}`}
        hasError={hasError}
      />
      <ErrorMessage>{meta.touched && meta.error}</ErrorMessage>
    </FieldContainer>
  );
};
