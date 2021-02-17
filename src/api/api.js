import * as axios from 'axios';

const apiInstance = axios.create({ baseURL: 'https://swapi.dev/api/' });

export const getFilmsFromServer = async () => {
  const randomNumber = Math.random();
  if (randomNumber < 0.25) {
    return Promise.reject("Couldn't fetch data from server");
  }
  return apiInstance.get('films').then((response) => response.data);
};

export const getFilmInfoFromServer = async (filmUrl) =>
  axios.get(filmUrl).then((response) => response.data);

export const getPlanetsFromServer = async (page) =>
  apiInstance.get(`planets?page=${page}`).then((response) => response.data);

export const getPlanetInfoFromServer = async (planetUrl) =>
  axios.get(planetUrl).then((response) => response.data);

export const getCharactersFromServer = async (page) =>
  apiInstance.get(`people?page=${page}`).then((response) => response.data);

export const getCharacterInfoFromServer = async (characterUrl) =>
  axios.get(characterUrl).then((response) => response.data);
