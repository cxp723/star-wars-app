//InitialState
import { getFilmsFromServer, getFilmInfoFromServer } from "./../../api/api";
const initialState = {
  films: [],
  isFetchingFilms: false,
  isFetchingFilmsInfo: false,
};
//ActionCreators
const SET_IS_FETCHING_FILMS = "FILMS/SET_IS_FETCHING";

const SET_IS_FETCHING_FILMS_INFO = "FILMS/SET_IS_FETCHING";

const SET_FILMS = "FILMS/SET_FILMS";

const DELETE_FILM = "FILMS/DELETE_FILM";

const ADD_FILM = "FILMS/ADD_FILM";

const ADD_INFO = "FILMS/ADD_INFO";

const setIsFetchingFilms = (isFetchingFilms) => ({
  type: SET_IS_FETCHING_FILMS,
  payload: { isFetchingFilms },
});

const setIsFetchingFilmsInfo = (isFetchingFilmsInfo) => ({
  type: SET_IS_FETCHING_FILMS,
  payload: { isFetchingFilmsInfo },
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
    case SET_IS_FETCHING_FILMS_INFO:
    case SET_FILMS:
      return { ...state, ...action.payload };
    case DELETE_FILM:
      return {
        ...state,
        films: state.films.filter((film) => film.episode_id !== action.id),
      };
    case ADD_FILM:
      return {
        ...state,
        films: [...state.films, { ...action.film, episode_id: new Date() }],
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

export const getFilmInfo = (filmUrl) => {
  return async (dispatch) => {
    dispatch(setIsFetchingFilmsInfo(true));
    const film = await getFilmInfoFromServer(filmUrl);
    dispatch(addInfo(film));
    dispatch(setIsFetchingFilmsInfo(false));
  };
};
