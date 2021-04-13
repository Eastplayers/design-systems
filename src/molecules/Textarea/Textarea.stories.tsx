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
import { LabelStyles, Variants } from "../../atoms/InputFields/types";

export const TextareaStory = (): React.ReactElement<TextareaInputProps> => {
  const label = text("Label", "Label");
  const width = number("Width", 300);
  const variant = select("Variant", Variants, Variants.OUTLINED);
  const placeholder = text("Placeholder", "Placeholder text");
  const resize = boolean("Resize", false);
  const disabled = boolean("Disabled", false);
  const error = boolean("Error", false);
  const labelStyle = select(
    "Label Style",
    LabelStyles,
    LabelStyles.CONTAINED_LABEL
  );
  const helperText = text("Helper Text", "Helper Text");
  return (
    <div style={{ width: width }}>
      <Textarea
        variant={variant}
        resize={resize}
        width={width}
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
