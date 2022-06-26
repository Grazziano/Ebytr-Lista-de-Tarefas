import { render, screen } from "@testing-library/react";
import App from "../App";

describe("01 - Header", () => {
  it("Should have logo in header", () => {
    render(<App />);
    const banner = screen.getByRole("banner");
    expect(banner).toBeInTheDocument();
  });

  it("Should have title", () => {
    render(<App />);
    const title = screen.getByRole("heading", { name: /task list/i });
    expect(title).toBeInTheDocument();
  });
});
