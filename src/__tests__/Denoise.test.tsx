import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Denoise from "../pages/Denoise";

describe("Denoise Component", () => {
  test("renders the component and displays the initial text", () => {
    render(<Denoise />);

    // Check if the initial text is rendered
    expect(screen.getByText("Image Denoising Technology")).toBeInTheDocument();
    expect(
      screen.getByText("Advanced noise reduction powered by stable diffusion.")
    ).toBeInTheDocument();
  });
});
