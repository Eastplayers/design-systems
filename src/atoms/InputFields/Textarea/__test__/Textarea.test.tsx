import { render } from "@testing-library/react";
import React from "react";
import Textarea from "../Textarea";
import "@testing-library/jest-dom/extend-expect";

test("Textarea expect has Testing text", async () => {
  const { getByText } = render(<Textarea defaultValue="Testing" />);
 
  expect(getByText("Testing")).toBeInTheDocument();
  expect(getByText("Testing")).toHaveTextContent("Testing");
});

test("Textarea expect has right className", async () => {
  const { container: textareaClassContainer } = render(
    <Textarea className="textarea-class" />
  );

  expect(textareaClassContainer.querySelector("textarea")).toHaveClass(
    "textarea-class"
  );
});

test("Textarea expect has right id", async () => {
  const { container: textareaLabelContainer } = render(
    <Textarea label="Label Id" />
  );
  const { container: textareaIdContainer } = render(<Textarea id="Id" />);

  expect(
    textareaLabelContainer.querySelector("textarea")?.getAttribute("Id")
  ).toEqual("Label Id");
  expect(
    textareaIdContainer.querySelector("textarea")?.getAttribute("Id")
  ).toEqual("Id");
});
