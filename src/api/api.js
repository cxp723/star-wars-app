import * as axios from "axios";

const baseUrl = "https://swapi.dev/api/";

const apiInstance = axios.create({ baseUrl });

export const getFilmsFromServer = () => {
  return axios
    .get("https://swapi.dev/api/films")
    .then((response) => response.data.results);
};
