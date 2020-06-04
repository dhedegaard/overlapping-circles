import React from "react";
import { cleanup, render } from "@testing-library/react";
import Layout from "..";

describe("layouts/Layout", () => {
  afterEach(cleanup);

  it("should render children", () => {
    const { queryByText } = render(<Layout>Some child text</Layout>);

    expect(queryByText(/Some child text/)).toBeTruthy();
  });
});
