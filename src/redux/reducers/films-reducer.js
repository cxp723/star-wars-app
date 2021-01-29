//InitialState
import { getFilmsFromServer, getFilmInfoFromServer } from "./../../api/api";
const initialState = {
  films: [],
  isFetchingFilms: false,
  isFetchingFilmsInfo: [],
};
//ActionCreators
const SET_IS_FETCHING_FILMS = "FILMS/SET_IS_FETCHING";

const TOGGLE_FETCHING_FILM_INFO = "FILMS/TOGGLE_FETCHING_FILM_INFO";

const SET_FILMS = "FILMS/SET_FILMS";

const DELETE_FILM = "FILMS/DELETE_FILM";

const ADD_FILM = "FILMS/ADD_FILM";

const ADD_INFO = "FILMS/ADD_INFO";

const setIsFetchingFilms = (isFetchingFilms) => ({
  type: SET_IS_FETCHING_FILMS,
  payload: { isFetchingFilms },
});

const toggleFetchingFilmInfo = (filmId) => ({
  type: TOGGLE_FETCHING_FILM_INFO,
  filmId: filmId,
});

const setFilms = (films) => ({
  type: SET_FILMS,
  payload: { films },
});

export const addFilm = (film) => ({
  type: ADD_FILM,
  film,
});

const addInfo = (film) => ({
  type: ADD_INFO,
  film,
});

export const deleteFilm = (id) => ({
  type: DELETE_FILM,
  id,
});

//Reducer
export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_FETCHING_FILMS:
    case SET_FILMS:
      return { ...state, ...action.payload };
    case TOGGLE_FETCHING_FILM_INFO:
      return {
        ...state,
        isFetchingFilmsInfo: state.isFetchingFilmsInfo.includes(action.filmId)
          ? state.isFetchingFilmsInfo.filter((id) => id !== action.filmId)
          : state.isFetchingFilmsInfo.concat(action.filmId),
      };
    case DELETE_FILM:
      return {
        ...state,
        films: state.films.filter((film) => film.episode_id !== action.id),
      };
    case ADD_FILM:
      return {
        ...state,
        films: [
          ...state.films,
          { ...action.film, episode_id: new Date().getTime() },
        ],
      };
    case ADD_INFO:
      return {
        ...state,
        films: state.films.map((film) =>
          film.episode_id === action.film.episode_id ? action.film : film
        ),
      };
    default:
      return state;
  }
};

//Thunks
export const getFilms = () => {
  return async (dispatch) => {
    dispatch(setIsFetchingFilms(true));
    const films = await getFilmsFromServer();
    dispatch(
      setFilms(
        films.map((film) => ({
          title: film.title,
          episode_id: film.episode_id,
          url: film.url,
        }))
      )
    );
    dispatch(setIsFetchingFilms(false));
  };
};

export const getFilmInfo = (id, url) => {
  return async (dispatch) => {
    dispatch(toggleFetchingFilmInfo(id));
    const filmInfo = await getFilmInfoFromServer(url);
    dispatch(addInfo(filmInfo));
    dispatch(toggleFetchingFilmInfo(id));
  };
};
