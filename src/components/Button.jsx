import styled from "styled-components";

const Button = styled.button`
  outline: none;
  border-radius: 5px;
  background-color: ${(p) => (p.green ? "#7ef297" : "#f2997e")};
  color: white;
  font-size: 1.2em;
  padding: 10px;
  font-weight: bold;
  flex: 1;
  margin: 0 5px;
  cursor: pointer;
`;

export default Button;
