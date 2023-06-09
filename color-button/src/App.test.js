import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App, { replaceCamelWithSpaces } from "./App";

describe("General App", () => {
  test("button has correct initial color", () => {
    render(<App />);

    expect(screen.getByRole("button", { name: /change to blue/i })).toHaveStyle(
      {
        backgroundColor: "red",
      }
    );
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

    expect(
      screen.getByRole("button", { name: /change to blue/i })
    ).toBeEnabled();
    expect(
      screen.getByRole("checkbox", { name: /disable button/i })
    ).not.toBeChecked();
  });

  test("When checkbox is checked, button should be disabled", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /change to blue/i });
    const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

    expect(button).toBeEnabled();
    expect(checkbox).not.toBeChecked();

    userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(button).not.toBeEnabled();

    userEvent.click(checkbox);

    expect(button).toBeEnabled();
    expect(checkbox).not.toBeChecked();
  });

  test("Button should be gray when disabled", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /change to blue/i });
    const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

    userEvent.click(checkbox);

    expect(button).toHaveStyle({ backgroundColor: "gray" });

    userEvent.click(checkbox);

    expect(button).toHaveStyle({ backgroundColor: "red" });

    userEvent.click(button);

    userEvent.click(checkbox);

    expect(button).toHaveStyle({ backgroundColor: "gray" });

    userEvent.click(checkbox);

    expect(button).toHaveStyle({ backgroundColor: "blue" });
  });
});

describe("replaceCamelWithSpaces", () => {
  // midnightBlue => midnight blue
  // blue => blue
  // colorTestColor => color test color

  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Blue")).toBe("Blue");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("ColorTestColor")).toBe("Color Test Color");
    expect(replaceCamelWithSpaces("ColorTestColorTest")).toBe(
      "Color Test Color Test"
    );
  });
});
