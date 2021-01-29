import styled from "styled-components";
import React from "react";
import preloader from "../assets/Preloader.gif";

const PreloaderContainer = styled.img`
  height: ${(p) => p.height}px;
  margin: auto;
`;

const Preloader = (props) => (
  <PreloaderContainer src={preloader} alt="preloader" height={props.height} />
);
Preloader.defaultProps = { height: 40 };
export default Preloader;
