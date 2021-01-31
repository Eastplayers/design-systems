import React from "react";
import Button from "../Button";
import { ButtonVariants, ButtonSizes } from "../types";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

test("Button expect has Submit text", () => {
  const { getByText } = render(<Button label={"Submit"} />);

  expect(getByText("Submit")).toHaveTextContent("Submit");
});

test("Button size L expect has Heading-4", () => {
  const { getByText } = render(
    <Button label={"Submit"} size={ButtonSizes.L} />
  );

  expect(getByText("Submit")).toHaveClass("heading-4");
});

test("Button size M expect has Heading-4", () => {
  const { getByText } = render(
    <Button label={"Submit"} size={ButtonSizes.L} />
  );

  expect(getByText("Submit")).toHaveClass("heading-4");
});

test("Button size S expect has Heading-5", () => {
  const { getByText } = render(
    <Button label={"Submit"} size={ButtonSizes.S} />
  );

  expect(getByText("Submit")).toHaveClass("heading-5");
});

test("Button size XS expect has Heading-6", () => {
  const { getByText } = render(
    <Button label={"Submit"} size={ButtonSizes.XS} />
  );

  expect(getByText("Submit")).toHaveClass("heading-6");
});

test("Primary Button expect has btn--primary class", () => {
  const { getByRole } = render(
    <Button label={"Submit"} variant={ButtonVariants.Primary} />
  );

  expect(getByRole("button")).toHaveClass("btn--primary");
});

test("Secondary Button has btn--secondary class", () => {
  const { getByRole } = render(
    <Button label={"Submit"} variant={ButtonVariants.Secondary} />
  );

  expect(getByRole("button")).toHaveClass("btn--secondary");
});

test("Secondary Button has btn--ghost class", () => {
  const { getByRole } = render(
    <Button label={"Submit"} variant={ButtonVariants.Ghost} />
  );

  expect(getByRole("button")).toHaveClass("btn--ghost");
});

test("Secondary Button has btn--link class", () => {
  const { getByRole } = render(
    <Button label={"Submit"} variant={ButtonVariants.Link} />
  );

  expect(getByRole("button")).toHaveClass("btn--link");
});
