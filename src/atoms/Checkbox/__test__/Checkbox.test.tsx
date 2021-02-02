import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Checkbox } from "..";

test("Checkbox expect has Testing label", async () => {
  const { getByLabelText } = render(<Checkbox label="Testing" />);

  expect(getByLabelText("Testing")).toBeInTheDocument();
  expect(getByLabelText("Testing")).toHaveTextContent("Testing");
});

test("Checkbox expect has Testing label", async () => {
  const { container } = render(<Checkbox label="Testing" />);

  fireEvent.click(container);
});
