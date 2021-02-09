export const filmsSelector = (state) => state.filmsPage.films;
export const isFetchingFilmsSelector = (state) =>
  state.filmsPage.isFetchingFilms;
export const isFetchingFilmsInfoSelector = (state) =>
  state.filmsPage.isFetchingFilmsInfo;
export const errorsSelector = (state) => state.filmsPage.errors;
