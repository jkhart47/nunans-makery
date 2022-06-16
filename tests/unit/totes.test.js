import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "./test-utils";
import HomePage from "../../pages/totes";

describe("HomePage", () => {
  it("should render the heading", () => {
    const textToFind = "At Home or On The Go!"

    render(<HomePage />);
    const heading = screen.getByText(textToFind);

    expect(heading).toBeInTheDocument();
  });
});