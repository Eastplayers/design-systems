import React from "react";
import Button from "../Button";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

describe("Button unit test", () => {
  test("<Button /> expect has Submit text", async () => {
    const { getByText } = render(<Button label={"Submit"} />);

    expect(getByText("Submit")).toBeInTheDocument();
    expect(getByText("Submit")).toHaveTextContent("Submit");
  });
});
