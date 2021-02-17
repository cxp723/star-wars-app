import { getFilmInfoFromServer, getFilmsFromServer } from '../../../api/api';
import {
  successGetFilmInfoResponse,
  successGetFilmsResponse,
} from '../../../test-utils/serverResponses';
import {
  addFilmInfo,
  getFilmInfo,
  getFilms,
  setFilms,
  setIsFetchingFilms,
  toggleFetchingFilmInfo,
} from './films-actions';

jest.mock('../../../api/api');

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
  dispatchMock.mockClear();
  getStateMock.mockClear();
});

test('getFilms thunk works correctly', async () => {
  const getFilmsThunk = getFilms();
  getFilmsFromServer.mockReturnValue(Promise.resolve(successGetFilmsResponse));
  await getFilmsThunk(dispatchMock, getStateMock, {});
  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, setIsFetchingFilms({ isFetchingItems: true }));
  expect(dispatchMock).toHaveBeenNthCalledWith(
    2,
    setFilms({
      items: [
        { title: 'A New Hope', url: 'http://swapi.dev/api/films/1/' },
        {
          title: 'The Empire Strikes Back',
          url: 'http://swapi.dev/api/films/2/',
        },
        { title: 'Return of the Jedi', url: 'http://swapi.dev/api/films/3/' },
      ],
      count: 6,
    }),
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(3, setIsFetchingFilms({ isFetchingItems: false }));
});

test('getFilmInfo Thunk works correctly', async () => {
  const getFilmInfoThunk = getFilmInfo('A New Hope', 'http://swapi.dev/api/films/1/');
  getFilmInfoFromServer.mockReturnValue(Promise.resolve(successGetFilmInfoResponse));
  await getFilmInfoThunk(dispatchMock, getStateMock, {});
  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFetchingFilmInfo({ title: 'A New Hope' }));
  expect(dispatchMock).toHaveBeenNthCalledWith(
    2,
    addFilmInfo({ item: successGetFilmInfoResponse }),
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFetchingFilmInfo({ title: 'A New Hope' }));
});
