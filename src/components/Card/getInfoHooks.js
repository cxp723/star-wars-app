import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCharacterInfo } from '../../redux/reducers/characters-reducer/characters-actions';
import { getFilmInfo } from '../../redux/reducers/films-reducer/films-actions';
import { getPlanetInfo } from '../../redux/reducers/planets-reducer/planets-actions';

export function useFilmInfo(isFetched, title, url) {
  const dispatch = useDispatch()
  useEffect(() => {
    if (isFetched) dispatch(getFilmInfo(title, url));
  }, []);
}

export function usePlanetInfo(isFetched, title, url) {
  const dispatch = useDispatch()
  useEffect(() => {
    if (isFetched) dispatch(getPlanetInfo(title, url));
  }, []);
}

export function useCharacterInfo(isFetched, title, url) {
  const dispatch = useDispatch()
  useEffect(() => {
    if (isFetched) dispatch(getCharacterInfo(title, url));
  }, []);
}
