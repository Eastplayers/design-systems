import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";

import { TextInput } from "./TextInput";
import { TextInputProps } from "./TextInput/TextInput";
import { TextareaInput } from "./TextareaInput";

export const Text = (): React.ReactElement<TextInputProps> => {
  const disabled = boolean("Disabled", false);
  return (
    <>
      <TextInput
        label="write something"
        placeholder="write something"
        disabled={disabled}
      />
    </>
  );
};
export const Textarea = (): React.ReactElement<TextInputProps> => {
  const disabled = boolean("Disabled", false);
  return (
    <>
      <TextareaInput
        label="write something"
        placeholder="write something"
        disabled={disabled}
      />
    </>
  );
};

export default {
  title: "Atoms/Inputs",
  decorators: [withKnobs]
};
