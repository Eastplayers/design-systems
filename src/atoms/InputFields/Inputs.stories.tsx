import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";

import { Input } from "./Input";
import { InputProps } from "./Input/Input";
import { TextareaProps } from "./Textarea/Textarea";
import { Textarea } from "./Textarea";

export const TextInput = (): React.ReactElement<InputProps | TextareaProps> => {
  const disabled = boolean("Disabled", false);
  return (
    <>
      <Input
        label="write something"
        placeholder="write something"
        disabled={disabled}
      />
      <Textarea
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
