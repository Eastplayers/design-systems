import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Icon from "../Icon";

test("<Icon /> expect return haha", async () => {
  render(
    <Icon
      size="18"
      color="blue"
      style={{ border: "1px solid black" }}
      stroke="blue"
      icon="like"
    />
  );

  screen.getByText("haha");
});
