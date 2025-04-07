import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "../components/Layout";

describe("Layout Component", () => {
  it("renders the logo and brand name", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    expect(screen.getByText("UltraDiffusion")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Denoise Images")).toBeInTheDocument();
    expect(screen.getByText("Filters")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders the footer with copyright text", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(
        `© ${currentYear} UltraDiffusion Research. All rights reserved.`
      )
    ).toBeInTheDocument();
  });

  it("renders the Outlet component for nested routes", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    // The main element should be present
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
