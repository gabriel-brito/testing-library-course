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

test("Initial conditions", () => {
  render(<App />);

  expect(screen.getByRole("button", { name: /change to blue/i })).toBeEnabled();
  expect(screen.getByRole("checkbox")).not.toBeChecked();
});

test("When checkbox is checked, button should be disabled", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /change to blue/i });
  const checkbox = screen.getByRole("checkbox");

  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();

  userEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(button).not.toBeEnabled();

  userEvent.click(checkbox);

  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});
