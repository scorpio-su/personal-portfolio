import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the site header landmark", () => {
    render(<App />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders the Software Engineer level-1 heading", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: /software engineer/i }),
    ).toBeInTheDocument();
  });
});
