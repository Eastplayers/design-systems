import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Radio } from "..";
import { RadioSizes } from "../types";

// Test Label
test("Radio expect has Testing label", async () => {
  const { getByText } = render(<Radio label="Testing" />);
  expect(getByText("Testing")).toBeInTheDocument();
  expect(getByText("Testing")).toHaveTextContent("Testing");
});

// Test Classes
test("Radio expect to be disabled", async () => {
  const { getByText } = render(<Radio disabled label="Testing" />);
  expect(getByText("Testing")).toBeInTheDocument();
  expect(getByText("Testing")).toHaveClass("disabled");
});

test("Radio expect to has small size", async () => {
  const { getByText } = render(
    <Radio size={RadioSizes.SMALL} label="Testing" />
  );
  expect(getByText("Testing")).toBeInTheDocument();
  expect(getByText("Testing")).toHaveClass("radio--small");
});

test("Radio expect to be inlined", async () => {
  const { getByText } = render(<Radio inline label="Testing" />);
  expect(getByText("Testing")).toBeInTheDocument();
  expect(getByText("Testing")).toHaveClass("radio--inline");
});

// Test behaviours
test("Radio expect to be checked/unchecked when clicking on label", async () => {
  const { getByText } = render(
    <div>
      <Radio defaultChecked label="Testing 1" name="testing" />
      <Radio label="Testing 2" name="testing" />
    </div>
  );
  const labelRadio1 = getByText("Testing 1") as HTMLLabelElement;
  const labelRadio2 = getByText("Testing 2") as HTMLLabelElement;
  fireEvent.click(labelRadio2);
  expect(labelRadio1.querySelector("input")?.checked).toEqual(false);
  expect(labelRadio2.querySelector("input")?.checked).toEqual(true);
});

test("Radio expect to be checked be default", async () => {
  const { getByText } = render(<Radio defaultChecked label="Testing" />);
  const label = getByText("Testing");
  expect(label.querySelector("input")?.checked).toEqual(true);
});
