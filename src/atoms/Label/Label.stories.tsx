import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";
import Label, { LableProps } from "./Label";

export const All: React.FC<LableProps> = () => {
  const value = text("Label value", "Label");
  return (
    <>
      <Label value={value} />
      <Label>helllo</Label>
    </>
  );
};

export default {
  title: "Atoms/Label",
  decorators: [withKnobs]
};
