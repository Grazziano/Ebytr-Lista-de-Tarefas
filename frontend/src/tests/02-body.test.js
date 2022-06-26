import { render, screen } from "@testing-library/react";
import App from "../App";

it("render heading on body", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { name: /tarefas/i });
  expect(heading).toBeInTheDocument();
});
