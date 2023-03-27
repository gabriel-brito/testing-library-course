import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  expect(screen.getByRole("button", { name: /change to blue/i })).toHaveStyle({
    backgroundColor: "red",
  });
});

test("button turns blue when clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /change to blue/i });

  userEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: "blue" });
  expect(button).toHaveTextContent(/change to red/i);
});
