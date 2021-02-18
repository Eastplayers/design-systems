import React from "react";
import {
  withKnobs,
  text,
  select,
  color,
  boolean
} from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";

import { TextInput } from ".";
import { TextInputProps } from "./TextInput";

export const All = (): React.ReactElement<TextInputProps> => {
  const paragraph = boolean("Paragraph", false);
  const disabled = boolean("Disabled", false);

  return (
    <TextInput
      paragraph={paragraph}
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
