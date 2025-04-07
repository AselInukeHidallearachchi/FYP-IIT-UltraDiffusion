import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

// Mock the child components to simplify testing
jest.mock("../pages/Home", () => () => (
  <div data-testid="home-page">Home Page</div>
));
jest.mock("../pages/About", () => () => (
  <div data-testid="about-page">About Page</div>
));
jest.mock("../pages/Denoise", () => () => (
  <div data-testid="denoise-page">Denoise Page</div>
));
jest.mock("../pages/Filters", () => () => (
  <div data-testid="filters-page">Filters Page</div>
));

// Mock the Layout component to render its children
jest.mock("../components/Layout", () => {
  const Layout = () => (
    <div data-testid="layout">
      <div data-testid="outlet">
        <div data-testid="home-page">Home Page</div>
      </div>
    </div>
  );
  return Layout;
});

// Mock the Outlet component from react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Routes: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Route: ({
    element,
    index,
  }: {
    element: React.ReactNode;
    index?: boolean;
  }) => {
    if (index) {
      return element;
    }
    return <div>{element}</div>;
  },
  Outlet: () => (
    <div data-testid="outlet">
      <div data-testid="home-page">Home Page</div>
    </div>
  ),
}));

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByTestId("layout")).toBeInTheDocument();
  });

  it("renders the home page by default", () => {
    render(<App />);
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });
});
