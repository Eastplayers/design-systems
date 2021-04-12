import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Textarea } from "..";
import "@testing-library/jest-dom/extend-expect";

test("Textarea componentn expect has right id", async () => {
  const { container } = render(<Textarea id="TextId" />);
  expect(container.querySelector("textarea")?.getAttribute("id")).toEqual(
    "TextId"
  );
});

test("Textarea component expect has right width", async () => {
  const { container } = render(<Textarea width={700} />);

  expect(container.querySelector("div")).toHaveStyle("width: 700px");
});

test("Textarea component expect has right label style", async () => {
  const { container: ContainedLabelContainer } = render(
    <Textarea labelStyle="contained" />
  );
  const { container: TopLabelContainer } = render(
    <Textarea labelStyle="top" />
  );

  expect(
    ContainedLabelContainer.querySelector("label")?.getAttribute("id")
  ).toEqual("contained-label");
  expect(TopLabelContainer.querySelector("label")?.getAttribute("id")).toEqual(
    "top-label"
  );
});

test("Textarea component expect has right label", async () => {
  const { container } = render(<Textarea label="Testing Label" />);

  expect(container.querySelector("label")).toHaveTextContent("Testing Label");
});

test("Textarea component expect has right state", async () => {
  const { container: errorTextareaContainer } = render(<Textarea error />);
  const { container: disabledTextareaContainer } = render(
    <Textarea disabled />
  );

  expect(errorTextareaContainer.querySelector("div")).toHaveClass(
    "textarea-error"
  );
  expect(disabledTextareaContainer.querySelector("div")).toHaveClass(
    "textarea-disabled"
  );
});

test("Textarea component expect has right className", async () => {
  const { container } = render(<Textarea className="test-class" />);

  expect(container.querySelector("div")).toHaveClass("test-class");
});

test("Textarea component expect has right helper text", async () => {
  const { getByText } = render(<Textarea helperText="Test help" />);

  expect(getByText("Test help"));
});

test("Textarea component expect can be resized", async () => {
  const { container } = render(<Textarea resize />);

  expect(container.querySelector("textarea")).toHaveClass("textarea-resize");
});

test("Textarea component expect has right variant", async () => {
  const { container } = render(<Textarea variant="filled" />);

  expect(container.querySelector("div")).toHaveClass("textarea-filled");
});

test("Textarea component expect focused after click textarea", async () => {
  const { getByText, container: testTextareaContainer } = render(
    <Textarea defaultValue="click me" />
  );

  fireEvent.focus(getByText("click me"));
  expect(testTextareaContainer.querySelector("div")).toHaveClass(
    "textarea-focused"
  );
});

// test("Textarea component expect focused after click label", async () => {
//   const { getByText, container: testLabelContainer } = render(
//     <Textarea label="test label" className="hello" />
//   );

//   const label = getByText("test label") as HTMLLabelElement;
//   fireEvent.click(label);

//   console.log(testLabelContainer.querySelector("div"));

//   expect(testLabelContainer.querySelector("div")).toHaveClass("textarea-focused");
// });
