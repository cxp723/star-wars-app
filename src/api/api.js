import * as axios from "axios";

const baseUrl = "https://swapi.dev/api/";

const apiInstance = axios.create({ baseUrl });

export const getFilmsFromServer = async () => {
  return axios
    .get("https://swapi.dev/api/films")
    .then((response) => response.data.results);
};

export const getFilmInfoFromServer = async (filmUrl) =>
  axios.get(filmUrl).then((response) => response.data);
