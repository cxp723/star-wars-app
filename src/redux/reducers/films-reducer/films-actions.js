import { createAction } from 'redux-actions';
import { getFilmInfoFromServer, getFilmsFromServer } from '../../../api/api';
import { getItemInfoThunkCreator, getItemsThunkCreator } from '../helpers/actionCreators';

export const setIsFetchingFilms = createAction('FILMS/SET_IS_FETCHING');

export const toggleFetchingFilmInfo = createAction('FILMS/TOGGLE_FETCHING_FILM_INFO');

export const setFilms = createAction('FILMS/SET_FILMS');

export const addFilm = createAction('FILMS/ADD_FILM');

export const addFilmInfo = createAction('FILMS/ADD_INFO');

export const deleteFilm = createAction('FILMS/DELETE_FILM');

export const setError = createAction('FILMS/SET_ERROR');

export const deleteError = createAction('FILMS/DELETE_ERROR');

// Thunks
export const getFilms = getItemsThunkCreator(
  getFilmsFromServer,
  setFilms,
  setIsFetchingFilms,
  setError,
);

export const getFilmInfo = getItemInfoThunkCreator(
  getFilmInfoFromServer,
  addFilmInfo,
  toggleFetchingFilmInfo,
);
