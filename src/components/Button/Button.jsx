import styled from 'styled-components';

const Button = styled.button`
  outline: none;
  border-radius: 5px;
  background-color: ${(p) => (p.green ? '#7ef297' : p.red ? '#f2997e' : '#5da4f5')};
  color: white;
  font-size: 1.2em;
  padding: 10px;
  font-weight: bold;
  ${(p) => p.small && 'max-width: 150px;'}
  cursor: pointer;
  flex: 1;
`;

export default Button;
