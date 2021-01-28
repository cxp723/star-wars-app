import styled from "styled-components";
import React from "react";
import preloader from "../assets/Preloader.gif";

const PreloaderContainer = styled.img`
  height: 40px;
`;
const Preloader = () => <PreloaderContainer src={preloader} alt="preloader" />;
export default Preloader;
