import { getFilmInfoFromServer, getFilmsFromServer } from "../../../api/api";
import {
  addFilmInfo,
  getFilmInfo,
  getFilms,
  setFilms,
  setIsFetchingFilms,
  toggleFetchingFilmInfo,
} from "./films-actions";

jest.mock("../../../api/api");

export const successGetFilmsResponse = {
  count: 6,
  next: null,
  previous: null,
  results: [
    {
      title: "A New Hope",
      episode_id: 4,
      opening_crawl: "It is a period of civil war.",
      director: "George Lucas",
      producer: "Gary Kurtz, Rick McCallum",
      release_date: "1977-05-25",
      characters: ["http://swapi.dev/api/people/1/"],
      planets: ["http://swapi.dev/api/planets/1/"],
      starships: ["http://swapi.dev/api/starships/2/"],
      vehicles: ["http://swapi.dev/api/vehicles/4/"],
      species: ["http://swapi.dev/api/species/1/"],
      created: "2014-12-10T14:23:31.880000Z",
      edited: "2014-12-20T19:49:45.256000Z",
      url: "http://swapi.dev/api/films/1/",
    },
    {
      title: "The Empire Strikes Back",
      episode_id: 5,
      opening_crawl: "It is a dark time for the Rebellion.",
      director: "Irvin Kershner",
      producer: "Gary Kurtz, Rick McCallum",
      release_date: "1980-05-17",
      characters: ["http://swapi.dev/api/people/1/"],
      planets: ["http://swapi.dev/api/planets/4/"],
      starships: ["http://swapi.dev/api/starships/3/"],
      vehicles: ["http://swapi.dev/api/vehicles/8/"],
      species: ["http://swapi.dev/api/species/1/"],
      created: "2014-12-12T11:26:24.656000Z",
      edited: "2014-12-15T13:07:53.386000Z",
      url: "http://swapi.dev/api/films/2/",
    },
    {
      title: "Return of the Jedi",
      episode_id: 6,
      opening_crawl:
        "Luke Skywalker has returned to his home planet of Tatooine.",
      director: "Richard Marquand",
      producer: "Howard G. Kazanjian, George Lucas, Rick McCallum",
      release_date: "1983-05-25",
      characters: ["http://swapi.dev/api/people/1/"],
      planets: ["http://swapi.dev/api/planets/1/"],
      starships: ["http://swapi.dev/api/starships/2/"],
      vehicles: ["http://swapi.dev/api/vehicles/8/"],
      species: ["http://swapi.dev/api/species/1/"],
      created: "2014-12-18T10:39:33.255000Z",
      edited: "2014-12-20T09:48:37.462000Z",
      url: "http://swapi.dev/api/films/3/",
    },
  ],
};

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
  dispatchMock.mockClear();
  getStateMock.mockClear();
});

test("getFilms thunk works correctly", async () => {
  const getFilmsThunk = getFilms();
  getFilmsFromServer.mockReturnValue(Promise.resolve(successGetFilmsResponse));
  await getFilmsThunk(dispatchMock, getStateMock, {});
  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(
    1,
    setIsFetchingFilms({ isFetchingItems: true })
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    2,
    setFilms({
      items: [
        { title: "A New Hope", url: "http://swapi.dev/api/films/1/" },
        {
          title: "The Empire Strikes Back",
          url: "http://swapi.dev/api/films/2/",
        },
        { title: "Return of the Jedi", url: "http://swapi.dev/api/films/3/" },
      ],
      count: 6,
    })
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    3,
    setIsFetchingFilms({ isFetchingItems: false })
  );
});

export const successGetFilmInfoResponse = {
  title: "A New Hope",
  episode_id: 4,
  opening_crawl: "It is a period of civil war.",
  director: "George Lucas",
  producer: "Gary Kurtz, Rick McCallum",
  release_date: "1977-05-25",
  characters: ["http://swapi.dev/api/people/1/"],
  planets: ["http://swapi.dev/api/planets/1/"],
  starships: ["http://swapi.dev/api/starships/2/"],
  vehicles: ["http://swapi.dev/api/vehicles/4/"],
  species: ["http://swapi.dev/api/species/1/"],
  created: "2014-12-10T14:23:31.880000Z",
  edited: "2014-12-20T19:49:45.256000Z",
  url: "http://swapi.dev/api/films/1/",
};

test("getFilmInfo Thunk works correctly", async () => {
  const getFilmInfoThunk = getFilmInfo(
    "A New Hope",
    "http://swapi.dev/api/films/1/"
  );
  getFilmInfoFromServer.mockReturnValue(
    Promise.resolve(successGetFilmInfoResponse)
  );
  await getFilmInfoThunk(dispatchMock, getStateMock, {});
  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(
    1,
    toggleFetchingFilmInfo({ title: "A New Hope" })
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    2,
    addFilmInfo({ item: successGetFilmInfoResponse })
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    3,
    toggleFetchingFilmInfo({ title: "A New Hope" })
  );
});