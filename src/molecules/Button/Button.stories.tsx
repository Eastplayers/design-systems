import React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";

import { Button } from ".";
import { ButtonSizes, ButtonVariants, ButtonProps } from "./Button";

export const ButtonStory = (): React.ReactElement<ButtonProps> => {
  const label = text("Label", "Button Title");
  const isDisabled = boolean("Disabled", true);
  const buttonSize = select("Size", ButtonSizes, ButtonSizes.L);
  const buttonVariant = select(
    "Variant",
    ButtonVariants,
    ButtonVariants.Primary
  );

  return (
    <Button
      label={label}
      disabled={isDisabled}
      size={buttonSize}
      variant={buttonVariant}
    />
  );
};

export default {
  title: "Atoms/Button",
  decorators: [withKnobs]
};