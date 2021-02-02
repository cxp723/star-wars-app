import styled from "styled-components";
import DeleteIcon from "./icons/DeleteIcon";
import React, { useEffect } from "react";
import Preloader from "./Preloader";
import PropTypes from "prop-types";

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
const Card = React.memo(
  ({
    image,
    title,
    url,
    description,
    deleteFunc,
    isFetchingItemsInfo,
    getInfo,
  }) => {
    const isFetchedFilm = !!url;

    function useInfo(getInfoFunc, isFetched) {
      useEffect(() => {
        if (isFetched) getInfoFunc(title, url);
      }, []);
    }

    useInfo(getInfo, isFetchedFilm);

    const isFetching = isFetchingItemsInfo.includes(title);
    const info = Object.keys(description).map((item) => (
      <p key={item}>
        {item[0].toUpperCase() + item.slice(1)}:{" "}
        {isFetching ? <Preloader height="15" /> : description[item]}
      </p>
    ));

    return (
      <CardContainer>
        <CardImage src={image} />
        <CardDescription>
          <h2>{title}</h2>
          {info}
        </CardDescription>
        <DeleteIcon
          delete={() => {
            deleteFunc(title);
          }}
        />
      </CardContainer>
    );
  }
);
Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  deleteFunc: PropTypes.func,
  isFetchingItemsInfo: PropTypes.arrayOf(PropTypes.string),
  getInfo: PropTypes.func,
};
export default Card;
