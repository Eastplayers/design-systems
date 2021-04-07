import React from "react";
import {
  boolean,
  number,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";
import { TextInputProps } from "./Input";
import { Input } from ".";
import { TextInputType } from "../../atoms/InputFields/types";
import { InputLabelStyles } from "./types";
import { Icon } from "../../atoms/Icon";

export const InputStory = (): React.ReactElement<TextInputProps> => {
  const label = text("Label", "Label");
  const width = number("Width", 300);
  const maxLength = number("Max length", 50);
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
  const helperText = text("Helper Text", "Helper Text");
  const leadingIcon = boolean("Leading icon", true);
  const prefixIcon = boolean("Prefix icon", true);
  const trailingIcon = boolean("Trailing icon", true);
  const suffixIcon = boolean("Suffix icon", true);
  return (
    <div style={{ width: width }}>
      <Input
        maxLength={maxLength}
        width={width}
        filled={filled}
        label={label}
        labelStyle={labelStyle}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        error={error}
        helperText={helperText}
        prefixIcon={
          prefixIcon ? <Icon icon="equalizer" size="18" /> : undefined
        }
        suffixIcon={
          suffixIcon ? <Icon icon="chevron-down" size="18" /> : undefined
        }
        leadingIcon={leadingIcon ? <Icon icon="eye" size="24" /> : undefined}
        trailingIcon={
          trailingIcon ? <Icon icon="search" size="24" /> : undefined
        }
      />
    </div>
  );
};

export default {
  title: "Molecules/Input",
  decorators: [withKnobs]
};
