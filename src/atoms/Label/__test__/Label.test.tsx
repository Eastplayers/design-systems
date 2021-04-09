import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Label from "../Label";

test("Label expect has Testing text", async () => {
  const { getByText } = render(<Label>Testing</Label>);

  expect(getByText("Testing")).toBeInTheDocument();
  expect(getByText("Testing")).toHaveTextContent("Testing");
});

test("Label expect render right css for every className", async () => {
  const { container: bodyContainer } = render(
    <Label className="testing">Label</Label>
  );

  expect(bodyContainer.querySelector("label")).toHaveClass("testing");
});

test("Label expect render has testing value", async () => {
  const { getByText } = render(<Label value="Testing" />);

  expect(getByText("Testing")).toBeInTheDocument();
  expect(getByText("Testing")).toHaveTextContent("Testing");
});
