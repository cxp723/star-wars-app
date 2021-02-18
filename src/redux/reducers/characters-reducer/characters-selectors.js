const charactersSelector = (state) => state.charactersPage.characters;
const isFetchingCharactersSelector = (state) => state.charactersPage.isFetchingCharacters;
const isFetchingCharactersInfoSelector = (state) => state.charactersPage.isFetchingCharactersInfo;
const pageSizeSelector = (state) => state.charactersPage.pageSize;
const charactersTotalCountSelector = (state) => state.charactersPage.charactersTotalCount;
const errorsSelector = (state) => state.charactersPage.errors;

export default (state) => ({
  characters: charactersSelector(state),
  isFetchingCharacters: isFetchingCharactersSelector(state),
  isFetchingCharactersInfo: isFetchingCharactersInfoSelector(state),
  pageSize: pageSizeSelector(state),
  charactersTotalCount: charactersTotalCountSelector(state),
  errors: errorsSelector(state),
});
