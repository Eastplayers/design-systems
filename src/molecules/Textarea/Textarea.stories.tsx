import React from "react";
import {
  boolean,
  number,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";
import { TextareaInputProps } from "./Textarea";
import { Textarea } from ".";
import { InputLabelStyles } from "./types";

export const TextareaStory = (): React.ReactElement<TextareaInputProps> => {
  const label = text("Label", "Label");
  const width = number("Width", 300);
  const placeholder = text("Placeholder", "Placeholder text");
  const filled = boolean("Filled Input", false);
  const disabled = boolean("Disabled", false);
  const error = boolean("Error", false);
  const labelStyle = select(
    "Label Style",
    InputLabelStyles,
    InputLabelStyles.CONTAINED_LABEL
  );
  const helperText = text("Helper Text", "Helper Text");
  return (
    <div style={{ width: width }}>
      <Textarea
        width={width}
        filled={filled}
        label={label}
        labelStyle={labelStyle}
        disabled={disabled}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
      />
    </div>
  );
};

export default {
  title: "Molecules/Textarea",
  decorators: [withKnobs]
};
