import React from "react";
import Films from "./Films";
import { getFilmsFromServer } from "../../api/api";
import { getFilmInfoFromServer } from "../../api/api";
import { renderWithRedux } from "../../test-utils/test-utils";
import userEvent from "@testing-library/user-event";
import { initialState } from "../../redux/reducers/films-reducer/films-reducer";
import {
  successGetFilmInfoResponse,
  successGetFilmsResponse,
} from "../../redux/reducers/films-reducer/films-reducer.thunks.test";

jest.mock("../../api/api");

const errorGetFilmsResponse = "Fetching Error";

beforeEach(() => {
  getFilmsFromServer.mockReturnValue(Promise.resolve(successGetFilmsResponse));
  getFilmInfoFromServer.mockReturnValue(
    Promise.resolve(successGetFilmInfoResponse)
  );
});

describe("Films component testing", () => {
  it("Preloader is showed while films are fetching", () => {
    const { getByTestId } = renderWithRedux(<Films />, {
      initialState: {
        filmsPage: initialState,
      },
    });
    expect(getByTestId("preloader")).toBeInTheDocument();
  });

  it("Shows error message if server throws error", async () => {
    getFilmsFromServer.mockReturnValue(Promise.reject(errorGetFilmsResponse));
    const { findByText, queryAllByTestId, queryByTestId } = renderWithRedux(
      <Films />,
      {
        initialState: {
          filmsPage: initialState,
        },
      }
    );
    expect(await findByText("Fetching Error")).toBeInTheDocument();
    expect(queryAllByTestId("card")).toHaveLength(0);
    expect(queryByTestId("preloader")).toBeNull();
  });

  it("Films are showed after fetching from server", async () => {
    const { findAllByTestId, getByText } = renderWithRedux(<Films />, {
      initialState: {
        filmsPage: initialState,
      },
    });
    expect(await findAllByTestId("card")).toHaveLength(3);
    expect(getByText("Return of the Jedi")).toBeInTheDocument();
    expect(getByText(/George Lucas/i)).toBeInTheDocument();
  });

  it("Delete button works correctly", async () => {
    const { findAllByTestId } = renderWithRedux(<Films />, {
      initialState: {
        filmsPage: initialState,
      },
    });

    const deleteButtons = await findAllByTestId("delete");
    userEvent.click(deleteButtons[1]);
    expect(await findAllByTestId("card")).toHaveLength(2);
  });

  it("Add form is on the page and works correctly", async () => {
    const {
      findByText,
      getByText,
      getByPlaceholderText,
      getByRole,
      findAllByTestId,
    } = renderWithRedux(<Films />, {
      initialState: {
        filmsPage: initialState,
      },
    });

    expect(await findByText(/Add Film/i)).toBeInTheDocument();
    userEvent.type(getByPlaceholderText(/title/i), "New Film");
    userEvent.type(getByPlaceholderText(/director/i), "New Director");
    userEvent.type(getByPlaceholderText(/producer/i), "New Producer");
    userEvent.click(getByRole("button", { name: "Add" }));
    expect(await findAllByTestId("card")).toHaveLength(4);
    expect(getByText("New Film")).toBeInTheDocument();
  });
});
