import React from "react";
import { render, cleanup } from "@testing-library/react";
import Index from "..";

describe("pages/index", () => {
  afterEach(cleanup);

  it("should render the index page", () => {
    const { queryByText } = render(<Index />);

    expect(queryByText(/Circle 2 radius/)).toBeTruthy();
  });
});
