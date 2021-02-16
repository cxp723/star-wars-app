import {
  addFilm,
  addFilmInfo,
  deleteError,
  deleteFilm,
  setError,
  setFilms,
  setIsFetchingFilms,
  toggleFetchingFilmInfo,
} from "./films-actions";
import { filmsReducer } from "./films-reducer";

let oldState;
beforeEach(() => {
  oldState = {
    films: [
      { title: "A New Hope", url: "https://swapi.dev/api/films/1/" },
      {
        title: "The Empire Strikes Back",
        url: "https://swapi.dev/api/films/2/",
      },
      {
        title: "Return of the Jedi",
        url: "https://swapi.dev/api/films/3/",
      },
    ],
    isFetchingFilms: false,
    isFetchingFilmsInfo: [],
    errors: {},
  };
});

test("fetching films sets correctly", () => {
  let setIsFetchingFilmsAction = setIsFetchingFilms({
    isFetchingItems: true,
  });
  let newState = filmsReducer(oldState, setIsFetchingFilmsAction);
  expect(newState.isFetchingFilms).toBeTruthy();
  setIsFetchingFilmsAction = setIsFetchingFilms({
    isFetchingItems: false,
  });
  newState = filmsReducer(oldState, setIsFetchingFilmsAction);
  expect(newState.isFetchingFilms).toBeFalsy();
});

test("toggle fetching film info pushes film title to fetching array and removes it", () => {
  const toggleFetchingFilmInfoAction = toggleFetchingFilmInfo({
    title: "A New Hope",
  });
  let newState = filmsReducer(oldState, toggleFetchingFilmInfoAction);
  expect(newState.isFetchingFilmsInfo).toHaveLength(1);
  expect(newState.isFetchingFilmsInfo).toContain("A New Hope");
  newState = filmsReducer(newState, toggleFetchingFilmInfoAction);
  expect(newState.isFetchingFilmsInfo).toHaveLength(0);
});

test("setFilms action remakes films array", () => {
  let setFilmsAction = setFilms({
    items: [
      {
        title: "The Empire Strikes Back",
        url: "http://swapi.dev/api/films/2/",
      },
      { title: "Return of the Jedi", url: "http://swapi.dev/api/films/3/" },
      { title: "The Phantom Menace", url: "http://swapi.dev/api/films/4/" },
      { title: "Attack of the Clones", url: "http://swapi.dev/api/films/5/" },
    ],
  });
  let newState = filmsReducer(oldState, setFilmsAction);
  expect(newState.films).toHaveLength(4);
  expect(newState.films[2].title).toEqual("The Phantom Menace");
  setFilmsAction = setFilms({ items: [] });
  newState = filmsReducer(newState, setFilmsAction);
  expect(newState.films).toHaveLength(0);
});

test("addFilm action pushes new film object to films array", () => {
  const addFilmAction = addFilm({
    title: "Return of the Jedi",
    director: "Aleksandr Kirichenko",
    producer: "Aleksandr Kirichenko",
  });
  const newState = filmsReducer(oldState, addFilmAction);
  expect(newState.films).toHaveLength(4);
  expect(newState.films[3].director).toEqual("Aleksandr Kirichenko");
});

test("addFilmInfo", () => {
  const addFilmInfoAction = addFilmInfo({
    item: {
      title: "The Empire Strikes Back",
      url: "http://swapi.dev/api/films/2/",
      director: "Jorge Lucas",
      producer: "Dean Martin",
    },
  });
  const newState = filmsReducer(oldState, addFilmInfoAction);
  expect(newState.films).toHaveLength(3);
  expect(newState.films[1]).toHaveProperty("producer");
  expect(newState.films[1].director).toEqual("Jorge Lucas");
});
test("deleteFilm", () => {
  const deleteFilmAction = deleteFilm({ title: "A New Hope" });
  const newState = filmsReducer(oldState, deleteFilmAction);
  expect(newState.films).toHaveLength(2);
  expect(newState.films[0].title).toEqual("The Empire Strikes Back");
});
test("setError, delete error", () => {
  const setErrorAction = setError({
    fetchingDataError: "Couldn't fetch data from server",
  });
  let newState = filmsReducer(oldState, setErrorAction);
  expect(newState.errors).toHaveProperty("fetchingDataError");
  expect(newState.errors.fetchingDataError).toEqual(
    "Couldn't fetch data from server"
  );
  const deleteErrorAction = deleteError("fetchingDataError");
  newState = filmsReducer(oldState, deleteErrorAction);
  expect(newState.errors.fetchingDataError).toBeUndefined();
});
