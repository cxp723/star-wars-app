import styled from "styled-components";
import posters from "./../assets/images/posters";
import DeleteIcon from "./icons/DeleteIcon";
import React, { useEffect } from "react";
import Preloader from "./Preloader";

const CardContainer = styled.div`
  margin: 15px;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: stretch;
  align-items: center;
  padding: 10px;
`;

const CardImage = styled.img`
  width: 30%;
`;

const CardDescription = styled.div`
  display: flex;
  flex-grow: 3;
  flex-direction: column;
  height: 80%;
  margin-left: 10px;
  h2 {
    margin: 5px;
  }
  p {
    margin: 3px;
  }
  align-self: flex-start;
`;
const Card = ({ film, deleteFilm, isFetchingFilmsInfo, getInfo }) => {
  function useInfo(getInfo) {
    useEffect(() => {
      if (film.url) getInfo(film);
    }, []);
  }

  useInfo(getInfo);

  const isFetching = isFetchingFilmsInfo.includes(film.episode_id);

  return (
    <CardContainer>
      <CardImage src={posters[film.episode_id] || posters.noImage} />
      <CardDescription>
        <h2>{film.title}</h2>
        <p>
          Director: {isFetching ? <Preloader height="15" /> : film.director}
        </p>
        <p>
          Producer: {isFetching ? <Preloader height="15" /> : film.producer}
        </p>
      </CardDescription>
      <DeleteIcon
        delete={() => {
          deleteFilm(film.episode_id);
        }}
      />
    </CardContainer>
  );
};

export default Card;
