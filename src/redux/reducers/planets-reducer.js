//InitialState
import { getPlanetsFromServer, getPlanetInfoFromServer } from "./../../api/api";
import {
  getItemsThunkCreator,
  getItemInfoThunkCreator,
} from "./helpers/actionCreators";

const initialState = {
  planets: [],
  isFetchingPlanets: false,
  isFetchingPlanetsInfo: [],
};

//ActionCreators
const SET_IS_FETCHING_PLANETS = "PLANETS/SET_IS_FETCHING";

const TOGGLE_FETCHING_PLANET_INFO = "PLANETS/TOGGLE_FETCHING_PLANET_INFO";

const SET_PLANETS = "PLANETS/SET_PLANETS";

const DELETE_PLANET = "PLANETS/DELETE_PLANET";

const ADD_PLANET = "PLANETS/ADD_PLANET";

const ADD_PLANET_INFO = "PLANETS/ADD_INFO";

const setIsFetchingPlanets = (isFetchingPlanets) => ({
  type: SET_IS_FETCHING_PLANETS,
  payload: { isFetchingPlanets },
});

const toggleFetchingPlanetInfo = (planetId) => ({
  type: TOGGLE_FETCHING_PLANET_INFO,
  planetId,
});

const setPlanets = (planets) => ({
  type: SET_PLANETS,
  payload: { planets },
});

export const addPlanet = (planet) => ({
  type: ADD_PLANET,
  planet,
});

const addPlanetInfo = (planet) => ({
  type: ADD_PLANET_INFO,
  planet,
});

export const deletePlanet = (name) => ({
  type: DELETE_PLANET,
  name,
});

//Reducer
export const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_FETCHING_PLANETS:
    case SET_PLANETS:
      return { ...state, ...action.payload };
    case TOGGLE_FETCHING_PLANET_INFO:
      const fetchingPlanets = state.isFetchingPlanetsInfo;
      return {
        ...state,
        isFetchingPlanetsInfo: fetchingPlanets.includes(action.planetId)
          ? fetchingPlanets.filter((id) => id !== action.planetId)
          : fetchingPlanets.concat(action.planetId),
      };
    case DELETE_PLANET:
      return {
        ...state,
        planets: state.planets.filter((planet) => planet.name !== action.name),
      };
    case ADD_PLANET:
      return {
        ...state,
        planets: [...state.planets, action.planet],
      };
    case ADD_PLANET_INFO:
      return {
        ...state,
        planets: state.planets.map((planet) =>
          planet.name === action.planet.name ? action.planet : planet
        ),
      };
    default:
      return state;
  }
};

//Thunks

export const getPlanets = getItemsThunkCreator(
  getPlanetsFromServer,
  setPlanets,
  setIsFetchingPlanets
);

export const getPlanetInfo = getItemInfoThunkCreator(
  getPlanetInfoFromServer,
  addPlanetInfo,
  toggleFetchingPlanetInfo
);
