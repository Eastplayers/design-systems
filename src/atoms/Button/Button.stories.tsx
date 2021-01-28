import React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";

import { Button } from ".";
import { ButtonSizes, ButtonVariants, ButtonProps } from "./Button";

export const ButtonStory = (): React.ReactElement<ButtonProps> => {
  const label = text("Label", "Button Title");
  const isDisabled = boolean("disable", true);
  const buttonSize = select("Button Size", ButtonSizes, ButtonSizes.L);
  const buttonVariant = select(
    "Button Size",
    ButtonVariants,
    ButtonVariants.Primary
  );

  return (
    <Button
      title={label}
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
