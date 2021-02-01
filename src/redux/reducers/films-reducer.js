//InitialState
import { getFilmsFromServer, getFilmInfoFromServer } from "./../../api/api";
import {
  getItemsThunkCreator,
  getItemInfoThunkCreator,
} from "./helpers/actionCreators";

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

const ADD_FILM_INFO = "FILMS/ADD_INFO";

const setIsFetchingFilms = (isFetchingFilms) => ({
  type: SET_IS_FETCHING_FILMS,
  payload: { isFetchingFilms },
});

const toggleFetchingFilmInfo = (title) => ({
  type: TOGGLE_FETCHING_FILM_INFO,
  title,
});

const setFilms = (films, count) => ({
  type: SET_FILMS,
  films,
  count,
});

export const addFilm = (film) => ({
  type: ADD_FILM,
  film,
});

const addFilmInfo = (film) => ({
  type: ADD_FILM_INFO,
  film,
});

export const deleteFilm = (title) => ({
  type: DELETE_FILM,
  title,
});

//Reducer
export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_FETCHING_FILMS:
      return { ...state, ...action.payload };
    case SET_FILMS:
      return { ...state, films: action.films };
    case TOGGLE_FETCHING_FILM_INFO:
      const fetchingFilms = state.isFetchingFilmsInfo;
      return {
        ...state,
        isFetchingFilmsInfo: fetchingFilms.includes(action.title)
          ? fetchingFilms.filter((title) => title !== action.title)
          : fetchingFilms.concat(action.title),
      };
    case DELETE_FILM:
      return {
        ...state,
        films: state.films.filter((film) => film.title !== action.title),
      };
    case ADD_FILM:
      return {
        ...state,
        films: [...state.films, action.film],
      };
    case ADD_FILM_INFO:
      return {
        ...state,
        films: state.films.map((film) =>
          film.title === action.film.title ? action.film : film
        ),
      };
    default:
      return state;
  }
};

//Thunks

export const getFilms = getItemsThunkCreator(
  getFilmsFromServer,
  setFilms,
  setIsFetchingFilms
);

export const getFilmInfo = getItemInfoThunkCreator(
  getFilmInfoFromServer,
  addFilmInfo,
  toggleFetchingFilmInfo
);
