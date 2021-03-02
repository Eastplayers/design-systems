import React from "react";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";
import { InputProps } from "./Input";
import { Input } from ".";
import { TextInputType } from "../../atoms/TextInput/types";
import { InputLabelStyles } from "./types";

export const InputStory = (): React.ReactElement<InputProps> => {
  const type = select("Input Types", TextInputType, TextInputType.INPUT);
  const disabled = boolean("Disabled", false);
  const error = boolean("Error", false);
  const labelStyle = select(
    "Label Style",
    InputLabelStyles,
    InputLabelStyles.CONTAINED_LABEL
  );
  const label = text("Label", "");
  return (
    <Input
      label={label}
      labelStyle={labelStyle}
      disabled={disabled}
      placeholder="write something"
      type={type}
      error={error}
    />
  );
};

export default {
  title: "Molecules/Input",
  decorators: [withKnobs]
};
