import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "./test-utils";
import HomePage from "../../pages/paperroutetote";

describe("HomePage", () => {
  it("should render the heading", () => {
    const textToFind = "E-Commerce in Next.js and SnipCart"
    render(<HomePage />);
    const heading = screen.getByText(textToFind);
    expect(heading).toBeInTheDocument();
  });
});