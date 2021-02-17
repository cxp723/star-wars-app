import { handleActions } from 'redux-actions';
import {
  setIsFetchingPlanets,
  toggleFetchingPlanetInfo,
  setPlanets,
  addPlanet,
  addPlanetInfo,
  deletePlanet,
} from './planets-actions';

export const initialState = {
  pageSize: 10,
  planetsTotalCount: null,
  planets: [],
  isFetchingPlanets: false,
  isFetchingPlanetsInfo: [],
};

export const planetsReducer = handleActions(
  {
    [setIsFetchingPlanets]: (state, { payload }) => ({
      ...state,
      isFetchingPlanets: payload.isFetchingItems,
    }),
    [toggleFetchingPlanetInfo]: (state, { payload }) => {
      const fetchingPlanets = state.isFetchingPlanetsInfo;
      return {
        ...state,
        isFetchingPlanetsInfo: fetchingPlanets.includes(payload.title)
          ? fetchingPlanets.filter((title) => title !== payload.title)
          : fetchingPlanets.concat(payload.title),
      };
    },
    [setPlanets]: (state, { payload }) => ({
      ...state,
      planets: payload.items,
      planetsTotalCount: payload.count,
    }),
    [addPlanet]: (state, { payload }) => ({
      ...state,
      planets: [...state.planets, payload],
    }),
    [addPlanetInfo]: (state, { payload }) => ({
      ...state,
      planets: state.planets.map((planet) => {
        if (planet.name === payload.item.name) {
          return payload.item;
        }
        return planet;
      }),
    }),
    [deletePlanet]: (state, { payload }) => ({
      ...state,
      planets: state.planets.filter((planet) => planet.name !== payload.title),
    }),
  },
  initialState,
);
