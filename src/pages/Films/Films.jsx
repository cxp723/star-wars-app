import React, { useEffect } from "react";
import { connect } from "react-redux";
import AddForm from "../../components/AddForm";
import Container from "../../components/Container";
import Preloader from "../../components/Preloader";
import {
  getFilms,
  deleteFilm,
  getFilmInfo,
  addFilm,
} from "../../redux/reducers/films-reducer";
import Card from "./../../components/Card";
import PropTypes from "prop-types";
import posters from "../../assets/images/posters/posters";

const Films = ({
  films,
  getFilms,
  isFetchingFilms,
  deleteFilm,
  addFilm,
  getFilmInfo,
  isFetchingFilmsInfo,
}) => {
  useEffect(() => {
    getFilms();
  }, []);

  const filmsList = films.map((film) => (
    <Card
      image={posters[film.title] || posters.noImage}
      key={film.title}
      title={film.title}
      description={{
        director: film.director,
        producer: film.producer,
        date: film.edited && new Date(film.edited).toDateString(),
      }}
      url={film.url || null}
      deleteFunc={deleteFilm}
      getInfo={getFilmInfo}
      isFetchingItemsInfo={isFetchingFilmsInfo}
    />
  ));

  return (
    <Container>
      {isFetchingFilms ? (
        <Preloader />
      ) : (
        <>
          {films.length > 0 ? <h1>Films:</h1> : null}
          {filmsList}
          <AddForm
            addFunc={addFilm}
            title="film"
            fields={["title", "director", "producer"]}
          />
        </>
      )}
    </Container>
  );
};
Films.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string,
      director: PropTypes.string,
      producer: PropTypes.string,
    })
  ),
  isFetchingFilms: PropTypes.bool.isRequired,
  isFetchingFilmsInfo: PropTypes.arrayOf(PropTypes.string),
  getFilms: PropTypes.func,
  deleteFilm: PropTypes.func,
  addFilm: PropTypes.func,
  getFilmInfo: PropTypes.func,
};
const mapStateToProps = (state) => ({
  films: state.filmsPage.films,
  isFetchingFilms: state.filmsPage.isFetchingFilms,
  isFetchingFilmsInfo: state.filmsPage.isFetchingFilmsInfo,
});
export default connect(mapStateToProps, {
  getFilms,
  deleteFilm,
  addFilm,
  getFilmInfo,
})(Films);
