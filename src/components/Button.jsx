import styled from "styled-components";

const Button = styled.button`
  outline: none;
  border-radius: 5px;
  background-color: ${(p) => (p.green ? "#d8f59a" : "#f5d79a")};
  color: white;
  font-size: 1.2em;
  padding: 10px;
  font-weight: bold;
`;

export default Button;
