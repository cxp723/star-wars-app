import * as axios from "axios";

const apiInstance = axios.create({ baseURL: "https://swapi.dev/api/" });

export const getFilmsFromServer = async () => {
  return apiInstance.get("films").then((response) => response.data);
};

export const getFilmInfoFromServer = async (filmUrl) =>
  axios.get(filmUrl).then((response) => response.data);

export const getPlanetsFromServer = async (page) => {
  return apiInstance
    .get("planets/?page=" + page)
    .then((response) => response.data);
};

export const getPlanetInfoFromServer = async (planetUrl) =>
  axios.get(planetUrl).then((response) => response.data);
