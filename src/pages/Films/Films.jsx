import React, { useEffect } from "react";
import { connect } from "react-redux";
import AddFilmForm from "../../components/AddFilmForm";
import Container from "../../components/Container";
import Preloader from "../../components/Preloader";
import {
  getFilms,
  deleteFilm,
  getFilmInfo,
  addFilm,
} from "../../redux/reducers/films-reducer";
import Card from "./../../components/Card";

const Films = React.memo(
  ({
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

    return (
      <Container>
        {isFetchingFilms ? (
          <Preloader />
        ) : (
          <div>
            <h1>Films:</h1>
            {films.map((film) => (
              <Card
                key={film.episode_id}
                film={film}
                deleteFilm={deleteFilm}
                getInfo={getFilmInfo}
                isFetchingFilmsInfo={isFetchingFilmsInfo}
              />
            ))}
            <AddFilmForm addFilm={addFilm} />
          </div>
        )}
      </Container>
    );
  }
);

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
