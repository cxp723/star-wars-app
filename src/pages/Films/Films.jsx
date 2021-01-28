import React, { useEffect } from "react";
import { connect } from "react-redux";
import Container from "../../components/Container";
import Preloader from "../../components/Preloader";
import { getFilms } from "../../redux/reducers/films-reducer";

const Films = (props) => {
  const { films, getFilms, isFetching } = props;
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
          <ol>
            {films.map((film) => (
              <li key={film.episode_id}>{film.title}</li>
            ))}
          </ol>
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  films: state.filmsPage.films,
  isFetching: state.filmsPage.isFetching,
});
export default connect(mapStateToProps, { getFilms })(Films);
