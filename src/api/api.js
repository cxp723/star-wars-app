import * as axios from 'axios';

const apiInstance = axios.create({ baseURL: 'https://swapi.dev/api/' });

export const getFilmsFromServer = async () => {
  if (Math.random() < 0.25) {
    return Promise.reject("Couldn't fetch data from server");
  }
  return apiInstance.get('films/').then((response) => response.data);
};

export const getFilmInfoFromServer = async (filmUrl) =>
  axios.get(filmUrl.replace('http://', 'https://')).then((response) => response.data);

export const getPlanetsFromServer = async (page) =>
  Math.random() < 0.25
    ? Promise.reject("Couldn't fetch data from server")
    : apiInstance.get(`planets?page=${page}`).then((response) => response.data);

export const getPlanetInfoFromServer = async (planetUrl) =>
  axios.get(planetUrl.replace('http://', 'https://')).then((response) => response.data);

export const getCharactersFromServer = async (page) => {
  if (Math.random() < 0.25) {
    return Promise.reject("Couldn't fetch data from server");
  }
  return apiInstance.get(`people?page=${page}`).then((response) => response.data);
};

export const getCharacterInfoFromServer = async (characterUrl) =>
  axios.get(characterUrl.replace('http://', 'https://')).then((response) => response.data);
