import { handleActions } from "redux-actions";
import {
  setFilms,
  setIsFetchingFilms,
  toggleFetchingFilmInfo,
  addFilm,
  addFilmInfo,
  deleteFilm,
  setError,
  deleteError,
} from "./films-actions";

//InitialState
const initialState = {
  films: [],
  isFetchingFilms: false,
  isFetchingFilmsInfo: [],
  errors: {},
};

export const filmsReducer = handleActions(
  {
    [setIsFetchingFilms]: (state, { payload }) => ({
      ...state,
      isFetchingFilms: payload.isFetchingItems,
    }),
    [toggleFetchingFilmInfo]: (state, { payload }) => {
      const fetchingFilms = state.isFetchingFilmsInfo;
      return {
        ...state,
        isFetchingFilmsInfo: fetchingFilms.includes(payload.title)
          ? fetchingFilms.filter((title) => title !== payload.title)
          : fetchingFilms.concat(payload.title),
      };
    },
    [setFilms]: (state, { payload }) => ({ ...state, films: payload.items }),
    [addFilm]: (state, { payload }) => ({
      ...state,
      films: [...state.films, payload],
    }),
    [addFilmInfo]: (state, { payload }) => ({
      ...state,
      films: state.films.map((film) =>
        film.title === payload.item.title ? payload.item : film
      ),
    }),
    [deleteFilm]: (state, { payload }) => ({
      ...state,
      films: state.films.filter((film) => film.title !== payload.title),
    }),
    [setError]: (state, { payload }) => ({
      ...state,
      errors: { ...state.errors, ...payload },
    }),
    [deleteError]: (state, { payload }) => ({
      ...state,
      errors: { ...state.errors, [payload]: undefined },
    }),
  },
  initialState
);
