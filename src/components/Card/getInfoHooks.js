import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCharacterInfo } from '../../redux/reducers/characters-reducer/characters-actions';
import { getFilmInfo } from '../../redux/reducers/films-reducer/films-actions';
import { getPlanetInfo } from '../../redux/reducers/planets-reducer/planets-actions';

const useInfo = (getCallback, isFetched, title, url) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isFetched) dispatch(getCallback(title, url));
  }, []);
};
export const useFilmInfo = (isFetched, title, url) => useInfo(getFilmInfo, isFetched, title, url);

export const usePlanetInfo = (isFetched, title, url) =>
  useInfo(getPlanetInfo, isFetched, title, url);

export const useCharacterInfo = (isFetched, title, url) =>
  useInfo(getCharacterInfo, isFetched, title, url);
