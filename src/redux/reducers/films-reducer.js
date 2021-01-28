//InitialState
import { getFilmsFromServer } from "./../../api/api";
const initialState = {
  films: [],
  isFetching: false,
};
//ActionCreators
const SET_IS_FETCHING = "FILMS/SET_IS_FETCHING";

const SET_FILMS = "FILMS/SET_FILMS";

const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  payload: { isFetching },
});

const setFilms = (films) => ({
  type: SET_FILMS,
  payload: { films },
});

//Reducer
export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_FETCHING:
    case SET_FILMS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

//Thunks
export const getFilms = () => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    let films = await getFilmsFromServer();
    dispatch(setFilms(films));
    dispatch(setIsFetching(false));
  };
};
