import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "./test-utils";
import HomePage from "../../pages/index";

describe("HomePage", () => {
  it("should render the heading", () => {
    const textToFind = "The Art of Fine Goods!"

    render(<HomePage />);
    const heading = screen.getByText(textToFind);

    expect(heading).toBeInTheDocument();
  });
});
