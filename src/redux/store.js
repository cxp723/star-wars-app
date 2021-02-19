import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { filmsReducer } from './reducers/films-reducer/films-reducer';
import { planetsReducer } from './reducers/planets-reducer/planets-reducer';
import { charactersReducer } from './reducers/characters-reducer/characters-reducer';
import sagaWatcher from './sagas/fetchDataSaga';

const saga = createSagaMiddleware();

export const rootReducer = combineReducers({
  filmsPage: filmsReducer,
  planetsPage: planetsReducer,
  charactersPage: charactersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, saga));

saga.run(sagaWatcher);

export default store;
