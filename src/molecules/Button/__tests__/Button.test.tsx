import React from "react";
import Button from "../Button";
import { ButtonVariants, ButtonSizes } from "../types";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

test("Button expect has Submit text", async () => {
  const { getByText } = render(<Button label={"Submit"} />);

  expect(getByText("Submit")).toBeInTheDocument();
  expect(getByText("Submit")).toHaveTextContent("Submit");
});

test("Primary Button expect has btn--primary class", async () => {
  const { getByRole } = render(
    <Button label={"Submit"} variant={ButtonVariants.Primary} />
  );

  expect(getByRole("button")).toHaveClass("btn--primary");
});

test("Secondary Button size L expect has Heading 5", async () => {
  const { getByText } = render(
    <Button
      label={"Submit"}
      variant={ButtonVariants.Secondary}
      size={ButtonSizes.L}
    />
  );

  expect(getByText("Submit")).toHaveClass("heading-4");
});
