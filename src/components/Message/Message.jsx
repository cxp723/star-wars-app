import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import CloseIcon from "../icons/CloseIcon";
import PropTypes from "prop-types";

const MessageContainer = styled.div`
  background-color: #${(p) => (p.error ? "f2d0d0" : "f6f7be")};
  padding: 20px;
  border-radius: 3px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MessageText = styled.div`
  font-size: 1.2em;
  flex: 1;
`;

const Message = ({
  closeFunc,
  onButtonClick,
  buttonText,
  children,
  ...restProps
}) => (
  <MessageContainer {...restProps}>
    <MessageText>{children}</MessageText>
    <Button onClick={onButtonClick} small>{buttonText}</Button>
    <CloseIcon closeFunc={closeFunc} />
  </MessageContainer>
);
Message.propTypes = {
  closeFunc: PropTypes.func,
  onButtonClick: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
  error: PropTypes.bool,
};
export default Message;
