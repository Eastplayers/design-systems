import React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";

import { Button } from ".";
import { ButtonProps } from "./Button";
import { ButtonSizes, ButtonVariants } from "./types";
import { Icon } from "../../atoms";

export const SingleStory = (): React.ReactElement<ButtonProps> => {
  const label = text("Label", "Button Title");
  const isDisabled = boolean("Disabled", false);
  const buttonSize = select("Size", ButtonSizes, ButtonSizes.L);
  const buttonVariant = select(
    "Variant",
    ButtonVariants,
    ButtonVariants.Primary
  );
  const icon = (
    <Icon
      icon={"chevron-down"}
      color={"white"}
      style={{ display: "inline" }}
      stroke="blue"
    />
  );
  return (
    <Button
      icon={icon}
      label={label}
      disabled={isDisabled}
      size={buttonSize}
      variant={buttonVariant}
    />
  );
};

export const AllStories = (): React.ReactElement<ButtonProps> => {
  const label = text("Label", "Button Title");
  const isDisabled = boolean("Disabled", true);

  return (
    <>
      {Object.values(ButtonSizes).map((size) => (
        <div key={size} style={{ marginBottom: 20 }}>
          {Object.values(ButtonVariants).map((variant, i) => (
            <div key={variant} style={{ marginBottom: 20 }}>
              <Button
                key={`${variant} ${i}`}
                label={label}
                disabled={isDisabled}
                size={size}
                variant={variant}
              />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default {
  title: "Molecules/Button",
  decorators: [withKnobs]
};
