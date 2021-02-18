import { createAction } from 'redux-actions';
import { getPlanetInfoFromServer, getPlanetsFromServer } from '../../../api/api';
import { getItemInfoThunkCreator, getItemsThunkCreator } from '../helpers/actionCreators';

export const setIsFetchingPlanets = createAction('PLANETS/SET_IS_FETCHING');

export const toggleFetchingPlanetInfo = createAction('PLANETS/TOGGLE_FETCHING_PLANET_INFO');

export const setPlanets = createAction('PLANETS/SET_PLANETS');

export const addPlanet = createAction('PLANETS/ADD_PLANET');

export const addPlanetInfo = createAction('PLANETS/ADD_INFO');

export const deletePlanet = createAction('PLANETS/DELETE_PLANET');

export const setError = createAction('PLANETS/SET_ERROR');

export const deleteError = createAction('PLANETS/DELETE_ERROR');

export const getPlanets = getItemsThunkCreator(
  getPlanetsFromServer,
  setPlanets,
  setIsFetchingPlanets,
  setError,
);

export const getPlanetInfo = getItemInfoThunkCreator(
  getPlanetInfoFromServer,
  addPlanetInfo,
  toggleFetchingPlanetInfo,
);
