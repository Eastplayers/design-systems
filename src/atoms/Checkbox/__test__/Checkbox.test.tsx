import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Checkbox } from "..";
import { CheckboxSizes } from "../types";

// Test Label
test("Checkbox expect has Testing label", async () => {
  const { getByText } = render(<Checkbox label="Testing" />);
  expect(getByText("Testing")).toBeInTheDocument();
  expect(getByText("Testing")).toHaveTextContent("Testing");
});

// Test Classes
test("Checkbox expect to be disabled", async () => {
  const { getByText } = render(<Checkbox disabled label="Testing" />);
  expect(getByText("Testing")).toBeInTheDocument();
  expect(getByText("Testing")).toHaveClass("disabled");
});

test("Checkbox expect to has small size", async () => {
  const { getByText } = render(
    <Checkbox size={CheckboxSizes.SMALL} label="Testing" />
  );
  expect(getByText("Testing")).toBeInTheDocument();
  expect(getByText("Testing")).toHaveClass("checkbox--small");
});

test("Checkbox expect to be inlined", async () => {
  const { getByText } = render(<Checkbox inline label="Testing" />);
  expect(getByText("Testing")).toBeInTheDocument();
  expect(getByText("Testing")).toHaveClass("checkbox--inline");
});

// Test behaviours
test("Checkbox expect to be checked/unchecked when clicking on label", async () => {
  const { getByText } = render(<Checkbox label="Testing" />);
  const label = getByText("Testing") as HTMLLabelElement;
  fireEvent.click(label);
  expect(label.querySelector("input")?.checked).toEqual(true);
  fireEvent.click(label);
  expect(label.querySelector("input")?.checked).toEqual(false);
});

test("Checkbox expect to be checked be default", async () => {
  const { getByText } = render(<Checkbox defaultChecked label="Testing" />);
  const label = getByText("Testing");
  expect(label.querySelector("input")?.checked).toEqual(true);
});
