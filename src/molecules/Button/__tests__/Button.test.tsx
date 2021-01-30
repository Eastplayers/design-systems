import React from "react";
import Button from "../Button";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

describe("Button unit test", () => {
  test("<Button /> expect has label text", async () => {
    const { getByText } = render(<Button label={"label"} />);

    expect(getByText("label")).toBeInTheDocument();
  });
});
