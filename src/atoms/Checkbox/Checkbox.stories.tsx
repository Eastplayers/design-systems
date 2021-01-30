import React from "react";
import {
  withKnobs,
  text,
  select,
  color,
  boolean
} from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";

import { Checkbox } from ".";
import { CheckboxProps, CheckboxSizes } from "./types";

export const All = (): React.ReactElement<CheckboxProps> => {
  const label = text("Label", "Sample content");
  // const decoration = select(
  //   "Decoration",
  //   TextDecorations,
  //   TextDecorations.NONE
  // );
  // const textColor = color("Color", "black");
  const size = select("Weight", CheckboxSizes, CheckboxSizes.NORMAL);
  const disabled = boolean("Disabled", false);

  return <Checkbox label={label} size={size} disabled={disabled} />;
};

export default {
  title: "Atoms/Checkbox",
  decorators: [withKnobs]
};
