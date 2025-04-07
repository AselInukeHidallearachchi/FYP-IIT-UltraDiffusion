import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";

describe("Home Component", () => {
  it("renders the main heading", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/Enhancing Ultrasound Imaging/i)
    ).toBeInTheDocument();
  });

  it("renders the subheading", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/with Denoising Diffusion Models/i)
    ).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/Advancing medical imaging quality/i)
    ).toBeInTheDocument();
  });

  it('renders the "Start Using Now" button', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText(/Start Using Now/i)).toBeInTheDocument();
  });

  it("renders all three feature sections", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText(/Noise-Adaptive Denoising/i)).toBeInTheDocument();
    expect(screen.getByText(/Real-time Processing/i)).toBeInTheDocument();
    expect(screen.getByText(/Deep Learning Optimized/i)).toBeInTheDocument();
  });

  it("renders the showcase images", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute("alt", "Medical ultrasound machine");
    expect(images[1]).toHaveAttribute("alt", "Digital medical display");
  });
});
