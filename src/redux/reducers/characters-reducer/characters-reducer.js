import { handleActions } from "redux-actions";
import {
  setIsFetchingCharacters,
  toggleFetchingCharacterInfo,
  setCharacters,
  addCharacter,
  addCharacterInfo,
  deleteCharacter,
} from "./characters-actions";

export const initialState = {
  pageSize: 10,
  charactersTotalCount: null,
  characters: [],
  isFetchingCharacters: false,
  isFetchingCharactersInfo: [],
};

export const charactersReducer = handleActions(
  {
    [setIsFetchingCharacters]: (state, { payload }) => ({
      ...state,
      isFetchingCharacters: payload.isFetchingItems,
    }),
    [toggleFetchingCharacterInfo]: (state, { payload }) => {
      const fetchingCharacters = state.isFetchingCharactersInfo;
      return {
        ...state,
        isFetchingCharactersInfo: fetchingCharacters.includes(payload.title)
          ? fetchingCharacters.filter((title) => title !== payload.title)
          : fetchingCharacters.concat(payload.title),
      };
    },
    [setCharacters]: (state, { payload }) => ({
      ...state,
      characters: payload.items,
      charactersTotalCount: payload.count,
    }),
    [addCharacter]: (state, { payload }) => ({
      ...state,
      characters: [...state.characters, payload],
    }),
    [addCharacterInfo]: (state, { payload }) => ({
      ...state,
      characters: state.characters.map((character) =>
        character.name === payload.item.name ? payload.item : character
      ),
    }),
    [deleteCharacter]: (state, { payload }) => ({
      ...state,
      characters: state.characters.filter(
        (character) => character.name !== payload.title
      ),
    }),
  },
  initialState
);