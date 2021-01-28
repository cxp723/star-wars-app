import { applyMiddleware, combineReducers, createStore } from "redux";
import { filmsReducer } from "./reducers/films-reducer";
import thunkMiddleware from "redux-thunk";

const reducer = combineReducers({
  filmsPage: filmsReducer,
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
