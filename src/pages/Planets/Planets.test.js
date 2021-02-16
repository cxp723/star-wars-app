import React from "react";
import { getPlanetsFromServer } from "../../api/api";
import { getPlanetInfoFromServer } from "../../api/api";
import { renderWithRedux } from "../../test-utils/test-utils";
import userEvent from "@testing-library/user-event";
import { initialState } from "./../../redux/reducers/planets-reducer/planets-reducer";
import Planets from "./Planets";

jest.mock("../../api/api");

const successGetPlanetsResponse = {
  count: 60,
  next: "http://swapi.dev/api/planets/?page=2",
  previous: null,
  results: [
    {
      name: "Tatooine",
      rotation_period: "23",
      orbital_period: "304",
      diameter: "10465",
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      surface_water: "1",
      population: "200000",
      residents: ["http://swapi.dev/api/people/1/"],
      films: ["http://swapi.dev/api/films/1/"],
      created: "2014-12-09T13:50:49.641000Z",
      edited: "2014-12-20T20:58:18.411000Z",
      url: "http://swapi.dev/api/planets/1/",
    },
  ],
};
const successGetPlanetInfoResponse = {
  name: "Tatooine",
  rotation_period: "23",
  orbital_period: "304",
  diameter: "10465",
  climate: "arid",
  gravity: "1 standard",
  terrain: "desert",
  surface_water: "1",
  population: "200000",
  residents: ["http://swapi.dev/api/people/1/"],
  films: ["http://swapi.dev/api/films/1/"],
  created: "2014-12-09T13:50:49.641000Z",
  edited: "2014-12-20T20:58:18.411000Z",
  url: "http://swapi.dev/api/planets/1/",
};

beforeEach(() => {
  getPlanetsFromServer.mockReturnValue(
    Promise.resolve(successGetPlanetsResponse)
  );
  getPlanetInfoFromServer.mockReturnValue(
    Promise.resolve(successGetPlanetInfoResponse)
  );
});

describe("Planets component testing", () => {
  it("Preloader is showed while planets are fetching", () => {
    const { getByTestId } = renderWithRedux(<Planets />, {
      initialState: {
        planetsPage: initialState,
      },
    });
    expect(getByTestId("preloader")).toBeInTheDocument();
  });

  it("Planets are showed after fetching from server", async () => {
    const { findAllByTestId, getByText } = renderWithRedux(<Planets />, {
      initialState: {
        planetsPage: initialState,
      },
    });
    expect(await findAllByTestId("card")).toHaveLength(1);
    expect(getByText("Tatooine")).toBeInTheDocument();
  });

  it("Delete button works correctly", async () => {
    const { findAllByTestId, queryAllByTestId } = renderWithRedux(<Planets />, {
      initialState: {
        planetsPage: initialState,
      },
    });

    const deleteButtons = await findAllByTestId("delete");
    userEvent.click(deleteButtons[0]);
    expect(queryAllByTestId("card")).toHaveLength(0);
  });

  it("Add form is on the page and works correctly", async () => {
    const {
      findByText,
      getByText,
      getByPlaceholderText,
      getByRole,
      findAllByTestId,
    } = renderWithRedux(<Planets />, {
      initialState: {
        planetsPage: initialState,
      },
    });

    expect(await findByText(/Add Planet/i)).toBeInTheDocument();
    userEvent.type(getByPlaceholderText(/name/i), "New Planet");
    userEvent.type(getByPlaceholderText(/diameter/i), "12243");
    userEvent.type(getByPlaceholderText(/gravity/i), "Normal");
    userEvent.click(getByRole("button", { name: "Add" }));
    expect(await findAllByTestId("card")).toHaveLength(2);
    expect(getByText("New Planet")).toBeInTheDocument();
  });
});
