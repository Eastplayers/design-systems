import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Text from "../Text";
import { FontTypes, FontWeights, TextDecorations } from "../types";

test("Text expect has Testing text", async () => {
  const { getByText } = render(<Text>Testing</Text>);

  expect(getByText("Testing")).toBeInTheDocument();
  expect(getByText("Testing")).toHaveTextContent("Testing");
});

test("Text expect render right tag for every types", async () => {
  const { container: bodyContainer } = render(
    <Text type={FontTypes.BODY_4}>Testing</Text>
  );
  const { container: headingContainer } = render(
    <Text type={FontTypes.HEADING_2}>Testing</Text>
  );
  const { container: displayContainer } = render(
    <Text type={FontTypes.DISPLAY_2}>Testing</Text>
  );

  expect(bodyContainer.querySelector("p")).toHaveClass("body-4");
  expect(headingContainer.querySelector("h2")).toHaveClass("heading-2");
  expect(displayContainer.querySelector("h1")).toHaveClass("display-2");
});

test("Text expect has decoration", async () => {
  const { getByText } = render(
    <Text decoration={TextDecorations.UNDERLINE}>Testing</Text>
  );

  expect(getByText("Testing")).toHaveClass("underline");
});

test("Text expect has custom weight", async () => {
  const { getByText } = render(<Text weight={FontWeights.BOLD}>Testing</Text>);

  expect(getByText("Testing")).toHaveClass("text--700");
});
