//InitialState
import { getFilmsFromServer } from "./../../api/api";
const initialState = {
  films: [],
  isFetching: false,
};
//ActionCreators
const SET_IS_FETCHING = "FILMS/SET_IS_FETCHING";

const SET_FILMS = "FILMS/SET_FILMS";

const DELETE_FILM = "FILMS/DELETE_FILM";

const ADD_FILM = "FILMS/ADD_FILM";

const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  payload: { isFetching },
});

const setFilms = (films) => ({
  type: SET_FILMS,
  payload: { films },
});

export const addFilm = (film) => ({
  type: ADD_FILM,
  film,
});

export const deleteFilm = (id) => ({
  type: DELETE_FILM,
  id,
});

//Reducer
export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_FETCHING:
    case SET_FILMS:
      return { ...state, ...action.payload };
    case DELETE_FILM:
      return {
        ...state,
        films: state.films.filter((film) => film.episode_id !== action.id),
      };
    case ADD_FILM:
      debugger;
      return {
        ...state,
        films: [...state.films, { ...action.film, episode_id: new Date() }],
      };
    default:
      return state;
  }
};

//Thunks
export const getFilms = () => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const films = await getFilmsFromServer();
    dispatch(
      setFilms(
        films.map((film) => ({
          title: film.title,
          episode_id: film.episode_id,
        }))
      )
    );
    dispatch(setIsFetching(false));
  };
};
