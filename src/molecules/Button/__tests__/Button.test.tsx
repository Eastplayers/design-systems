import React from "react";
import Button from "../Button";
import { render } from "@testing-library/react";

describe("Button unit test", () => {
  test("<Button /> expect has label text", async () => {
    const { getByText } = render(<Button label={"label"} />);

    expect(getByText("label"));
  });
});
