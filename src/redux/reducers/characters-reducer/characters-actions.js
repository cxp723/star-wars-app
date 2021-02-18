import { createAction } from 'redux-actions';
import { getCharacterInfoFromServer, getCharactersFromServer } from '../../../api/api';
import { getItemInfoThunkCreator, getItemsThunkCreator } from '../helpers/actionCreators';

export const setIsFetchingCharacters = createAction('CHARACTERS/SET_IS_FETCHING');

export const toggleFetchingCharacterInfo = createAction(
  'CHARACTERS/TOGGLE_FETCHING_CHARACTER_INFO',
);

export const setCharacters = createAction('CHARACTERS/SET_CHARACTERS');

export const addCharacter = createAction('CHARACTERS/ADD_CHARACTER');

export const addCharacterInfo = createAction('CHARACTERS/ADD_INFO');

export const deleteCharacter = createAction('CHARACTERS/DELETE_CHARACTER');

export const setError = createAction('CHARACTERS/SET_ERROR');

export const deleteError = createAction('CHARACTERS/DELETE_ERROR');

export const getCharacters = createAction('CHARACTERS/GET_CHARACTERS');

export const getCharacterInfo = createAction('CHARACTERS/GET_CHARACTER_INFO');
