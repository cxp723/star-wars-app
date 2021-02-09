import { applyMiddleware, combineReducers, createStore } from "redux";
import { filmsReducer } from "./reducers/films-reducer/films-reducer";
import thunkMiddleware from "redux-thunk";
import { planetsReducer } from "./reducers/planets-reducer/planets-reducer";

const reducer = combineReducers({
  filmsPage: filmsReducer,
  planetsPage: planetsReducer,
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
