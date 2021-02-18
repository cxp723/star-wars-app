import { put, call, takeEvery } from 'redux-saga/effects';
import { getCharactersFromServer, getCharacterInfoFromServer } from '../../api/api';
import {
  setIsFetchingCharacters,
  setCharacters,
  setError,
  toggleFetchingCharacterInfo,
  addCharacterInfo,
} from './../reducers/characters-reducer/characters-actions';

export function* sagaWatcher() {
  yield takeEvery('CHARACTERS/GET_CHARACTERS', getCharacters);
  yield takeEvery('CHARACTERS/GET_CHARACTER_INFO', getCharacterInfo);
}

function* getCharacters({ payload }) {
  try {
    yield put(setIsFetchingCharacters({ isFetchingItems: true }));
    const characters = yield call(() => getCharactersFromServer(payload));
    yield put(
      setCharacters({
        items: characters.results.map((item) => ({
          name: item.name,
          url: item.url,
        })),
        count: characters.count,
      }),
    );
  } catch (e) {
    yield put(setError({ fetchingDataError: e.toString() }));
  }
  yield put(setIsFetchingCharacters({ isFetchingItems: false }));
}

function* getCharacterInfo(action) {
  const { title, url } = action.payload;
  try {
    yield put(toggleFetchingCharacterInfo({ title }));
    const item = yield call(() => getCharacterInfoFromServer(url));
    yield put(
      addCharacterInfo({
        item,
      }),
    );
  } catch (e) {
    console.error('Error on server: ', e);
  }
  yield put(toggleFetchingCharacterInfo({ title }));
}
