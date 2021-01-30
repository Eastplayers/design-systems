import React from "react";
import Button from "../Button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("<Button /> expect has haha text", async () => {
  render(<Button label={"haha"} />);

  screen.getByText("haha");
});
