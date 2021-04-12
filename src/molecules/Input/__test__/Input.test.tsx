import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Input } from "..";
import "@testing-library/jest-dom/extend-expect";
import { Icon } from "../../../atoms/Icon";

test("Input componentn expect has right id", async () => {
  const { container } = render(<Input id="TextId" />);
  expect(container.querySelector("input")?.getAttribute("id")).toEqual(
    "TextId"
  );
});

test("Input component expect has right width", async () => {
  const { container } = render(<Input width={700} />);

  expect(container.querySelector("div")).toHaveStyle("width: 700px");
});

test("Input component expect has right label style", async () => {
  const { container: ContainedLabelContainer } = render(
    <Input labelStyle="contained" />
  );
  const { container: TopLabelContainer } = render(<Input labelStyle="top" />);

  expect(
    ContainedLabelContainer.querySelector("label")?.getAttribute("id")
  ).toEqual("contained-label");
  expect(TopLabelContainer.querySelector("label")?.getAttribute("id")).toEqual(
    "top-label"
  );
});

test("Input component expect has right label", async () => {
  const { container } = render(<Input label="Testing Label" />);

  expect(container.querySelector("label")).toHaveTextContent("Testing Label");
});

test("Input component expect has right state", async () => {
  const { container: errorInputContainer } = render(<Input error />);
  const { container: disabledInputContainer } = render(<Input disabled />);

  expect(errorInputContainer.querySelector("div")).toHaveClass("input-error");
  expect(disabledInputContainer.querySelector("div")).toHaveClass(
    "input-disabled"
  );
});

test("Input component expect has right className", async () => {
  const { container } = render(<Input className="test-class" />);

  expect(container.querySelector("div")).toHaveClass("test-class");
});

test("Input component expect has right helper text", async () => {
  const { getByText } = render(<Input helperText="Test help" />);

  expect(getByText("Test help"));
});

test("Input component expect has right variant", async () => {
  const { container } = render(<Input variant="filled" />);

  expect(container.querySelector("div")).toHaveClass("input-filled");
});

test("Input component expect focused after click Input", async () => {
  const { container: testInputContainer } = render(
    <Input defaultValue="click me" />
  );

  testInputContainer.querySelector("input")?.focus();
  expect(testInputContainer.querySelector("div")).toHaveClass("input-focused");
});

// test("Textarea component expect focused after click label", async () => {
//   const { getByLabelText, container: testLabelContainer } = render(
//     <Input label="test label" className="hello" />
//   );

//   const label = getByLabelText("test label") as HTMLLabelElement;
//   label.click();

//   expect(testLabelContainer.querySelector("div")).toHaveClass(
//     "textarea-focused"
//   );
// });

test("Input component expect got prefix icon", async () => {
  const { container } = render(
    <Input prefixIcon={<Icon color="#0F172A" icon="equalizer" size="18" />} />
  );
  expect(
    container.querySelector("#prefixIcon")?.querySelector("svg")
  ).not.toBeNull();
});

test("Input component expect got suffix icon", async () => {
  const { container } = render(
    <Input suffixIcon={<Icon color="#0F172A" icon="equalizer" size="18" />} />
  );
  expect(
    container.querySelector("#suffixIcon")?.querySelector("svg")
  ).not.toBeNull();
});

test("Input component expect got leading icon", async () => {
  const { container } = render(
    <Input leadingIcon={<Icon color="#0F172A" icon="equalizer" size="18" />} />
  );
  expect(
    container.querySelector("#leadingIcon")?.querySelector("svg")
  ).not.toBeNull();
});

test("Input component expect got trailing icon", async () => {
  const { container } = render(
    <Input trailingIcon={<Icon color="#0F172A" icon="equalizer" size="18" />} />
  );
  expect(
    container.querySelector("#trailingIcon")?.querySelector("svg")
  ).not.toBeNull();
});
