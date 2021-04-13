import React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";

import { Button } from ".";
import { ButtonProps } from "./Button";
import { ButtonSizes, ButtonVariants } from "./types";
import { Icon } from "../../atoms/Icon";

export const SingleStory = (): React.ReactElement<ButtonProps> => {
  const label = text("Label", "Button text");
  const isDisabled = boolean("Disabled", false);
  const buttonSize = select("Size", ButtonSizes, ButtonSizes.L);
  const buttonVariant = select(
    "Variant",
    ButtonVariants,
    ButtonVariants.Primary
  );
  const prefix = boolean("Prefix Icon", true);
  const suffix = boolean("Suffix Icon", false);

  return (
    <Button
      label={label}
      disabled={isDisabled}
      size={buttonSize}
      variant={buttonVariant}
      prefixIcon={
        prefix ? <Icon icon="video-library" color="white" /> : undefined
      }
      suffixIcon={
        suffix ? <Icon icon="video-library" color="white" /> : undefined
      }
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
