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
import posters from "../../assets/images/posters";

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
      image={posters[film.episode_id] || posters.noImage}
      key={film.episode_id}
      title={film.title}
      id={film.episode_id}
      description={{
        director: film.director,
        producer: film.producer,
        date: film.edited && new Date(film.edited).toDateString(),
      }}
      url={film.url || null}
      deleteFunc={deleteFilm}
      getInfo={getFilmInfo}
      isFetchingFilmsInfo={isFetchingFilmsInfo}
    />
  ));

  return (
    <Container>
      {isFetchingFilms ? (
        <Preloader />
      ) : (
        <div>
          <h1>Films:</h1>
          {filmsList}
          <AddForm
            addFunc={addFilm}
            title="Add your film:"
            fields={["title", "director", "producer"]}
          />
        </div>
      )}
    </Container>
  );
};
Films.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      episode_id: PropTypes.number.isRequired,
      url: PropTypes.string,
      director: PropTypes.string,
      producer: PropTypes.string,
    })
  ),
  isFetchingFilms: PropTypes.bool.isRequired,
  isFetchingFilmsInfo: PropTypes.arrayOf(PropTypes.number),
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
