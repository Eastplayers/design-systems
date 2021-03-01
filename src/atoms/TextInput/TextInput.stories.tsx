import React from "react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";

import { TextInput } from ".";
import { TextInputProps } from "./TextInput";
import { TextInputType } from "./types";

export const All = (): React.ReactElement<TextInputProps> => {
  const type = select("Input Type", TextInputType, TextInputType.INPUT);
  const disabled = boolean("Disabled", false);
  return (
    <TextInput
      type={type}
      label="write something"
      placeholder="write something"
      disabled={disabled}
    />
  );
};

export default {
  title: "Atoms/TextInput",
  decorators: [withKnobs]
};
