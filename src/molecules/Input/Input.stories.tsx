import React from "react";
import {
  boolean,
  number,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";
import { InputProps } from "./Input";
import { Input } from ".";
import { TextInputType } from "../../atoms/TextInput/types";
import { InputLabelStyles } from "./types";
import { IconsList } from "../../atoms/Icon/types";

export const InputStory = (): React.ReactElement<InputProps> => {
  const label = text("Label", "Label");
  const placeholder = text("Placeholder", "Placeholder text");
  const type = select("Input Types", TextInputType, TextInputType.INPUT);
  const filled = boolean("Filled Input", false);
  const disabled = boolean("Disabled", false);
  const error = boolean("Error", false);
  const labelStyle = select(
    "Label Style",
    InputLabelStyles,
    InputLabelStyles.CONTAINED_LABEL
  );
  const width = number("Input Width", 250);
  const helperText = text("Helper Text", "Helper Text");
  const leadingIcon = select("Leading Icon", IconsList, IconsList.CALENDAR)
  const prefixIcon = select("Prefix Icon", IconsList, IconsList.CHEVRON_RIGHT)
  const suffixIcon = select("Suffix Icon", IconsList, IconsList.EDIT)
  const trailingIcon = select("Trailing Icon", IconsList, IconsList.SEARCH)
  return (
    <div style={{ width: width }}>
      <Input
        filled={filled}
        label={label}
        labelStyle={labelStyle}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        error={error}
        helperText={helperText}
        prefixIcon={prefixIcon}
        suffixIcon={suffixIcon}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
      />
    </div>
  );
};

export default {
  title: "Molecules/Input",
  decorators: [withKnobs]
};
