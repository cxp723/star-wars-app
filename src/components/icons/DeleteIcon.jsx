import React from "react";
import deleteIcon from "../../assets/images/icons/deleteIcon.png";
import styled from "styled-components";

const DeleteIconContainer = styled.img`
  height: ${(p) => p.height}px;
  cursor: pointer;
`;
DeleteIconContainer.defaultProps = {
  height: 25,
};
const DeleteIcon = (props) => (
  <DeleteIconContainer src={deleteIcon} onClick={props.delete} />
);
export default DeleteIcon;
