import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import AddForm from "../../components/AddForm/AddForm";
import Container from "../../components/Container/Container";
import Preloader from "../../components/Preloader/Preloader";
import Card from "../../components/Card/Card";
import PropTypes from "prop-types";
import posters from "../../assets/images/posters/posters";
import {
  isFetchingFilmsSelector,
  filmsSelector,
  isFetchingFilmsInfoSelector,
  errorsSelector,
} from "./../../redux/reducers/films-reducer/films-selectors";
import {
  addFilm,
  deleteFilm,
  getFilms,
  getFilmInfo,
  deleteError,
} from "./../../redux/reducers/films-reducer/films-actions";
import Message from "../../components/Message/Message";
import { useFilmInfo } from "../../components/Card/getInfoHooks";
import { useCallback } from "react";

const fields = ["title", "director", "producer"];

const Films = ({
  films,
  getFilms,
  isFetchingFilms,
  deleteFilm,
  addFilm,
  isFetchingFilmsInfo,
  errors,
  deleteError,
}) => {
  useEffect(() => {
    getFilms();
  }, []);

  const filmsList = useMemo(
    () =>
      films.map((film) => (
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
          useInfo={useFilmInfo}
          isFetchingItemsInfo={isFetchingFilmsInfo}
        />
      )),
    [films, isFetchingFilmsInfo]
  );
  
  const addFilmCallback = useCallback((film) => {
    addFilm(film)
  }, [])

  return (
    <Container>
      {isFetchingFilms ? (
        <Preloader />
      ) : (
        <>
          {errors.fetchingDataError ? (
            <Message
              error
              closeFunc={() => {
                deleteError("fetchingDataError");
              }}
              onButtonClick={() => {
                deleteError("fetchingDataError");
                getFilms();
              }}
              buttonText="Try again"
            >
              {errors.fetchingDataError}
            </Message>
          ) : (
            films.length > 0 && (
              <>
                <h1>Films:</h1>
                {filmsList}
              </>
            )
          )}
          <AddForm
            addFunc={addFilmCallback}
            title="film"
            fields={fields}
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
  films: filmsSelector(state),
  isFetchingFilms: isFetchingFilmsSelector(state),
  isFetchingFilmsInfo: isFetchingFilmsInfoSelector(state),
  errors: errorsSelector(state),
});
export default connect(mapStateToProps, {
  getFilms,
  deleteFilm,
  addFilm,
  getFilmInfo,
  deleteError,
})(Films);
