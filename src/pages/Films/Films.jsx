import React, { useEffect } from "react";
import { connect } from "react-redux";
import AddFilmForm from "../../components/AddFilmForm";
import Container from "../../components/Container";
import Preloader from "../../components/Preloader";
import { getFilms, deleteFilm } from "../../redux/reducers/films-reducer";
import Card from "./../../components/Card";
import { addFilm } from "./../../redux/reducers/films-reducer";

const Films = ({ films, getFilms, isFetching, deleteFilm, addFilm }) => {
  useEffect(() => {
    getFilms();
  }, []);

  return (
    <Container>
      {isFetching ? (
        <Preloader />
      ) : (
        <div>
          <h1>Films:</h1>
          {films.map((film) => (
            <Card key={film.episode_id} film={film} deleteFilm={deleteFilm} />
          ))}
          <AddFilmForm addFilm={addFilm} />
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  films: state.filmsPage.films,
  isFetching: state.filmsPage.isFetching,
});
export default connect(mapStateToProps, { getFilms, deleteFilm, addFilm })(
  Films
);
