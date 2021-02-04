import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Preloader while fetching data from server", () => {
  const { getByTestId } = render(<App />);
  const preloader = getByTestId("preloader");
  expect(preloader).toBeInTheDocument();
});
