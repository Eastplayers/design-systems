import React from "react";
import Button from "../Button";
import { ButtonSizes, ButtonVariants } from "../types";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("<Icon /> expect return haha", async () => {
  render(<Button label={"haha"} />);

  screen.getByText("haha");
});
