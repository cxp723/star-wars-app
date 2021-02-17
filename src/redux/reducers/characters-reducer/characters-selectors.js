export const charactersSelector = (state) => state.charactersPage.characters;
export const isFetchingCharactersSelector = (state) =>
  state.charactersPage.isFetchingCharacters;
export const isFetchingCharactersInfoSelector = (state) =>
  state.charactersPage.isFetchingCharactersInfo;
export const pageSizeSelector = (state) => state.charactersPage.pageSize;
export const charactersTotalCountSelector = (state) =>
  state.charactersPage.charactersTotalCount;
export const charactersStateSelector = (state) => ({
  characters: charactersSelector(state),
  isFetchingCharacters: isFetchingCharactersSelector(state),
  isFetchingCharactersInfo: isFetchingCharactersInfoSelector(state),
  pageSize: pageSizeSelector(state),
  charactersTotalCount: charactersTotalCountSelector(state),
});
