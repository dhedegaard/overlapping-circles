import React from "react";
import { cleanup, render } from "@testing-library/react";
import NotFoundPage from "../404";

describe("pages/404", () => {
  afterEach(cleanup);
  it("should render a page telling the user that the page does not exist", () => {
    const { queryByText } = render(<NotFoundPage />);

    expect(queryByText(/NOT FOUND/)).toBeTruthy();
  });
});
