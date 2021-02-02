import React from "react";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";

import { Checkbox } from ".";
import { CheckboxProps, CheckboxSizes } from "./types";

export const All = (): React.ReactElement<CheckboxProps> => {
  const label = text("Label", "Sample content");
  const size = select("Weight", CheckboxSizes, CheckboxSizes.NORMAL);
  const disabled = boolean("Disabled", false);
  const inline = boolean("Inline", false);

  return (
    <div>
      <Checkbox label={label} size={size} disabled={disabled} inline={inline} />
      <Checkbox label={label} size={size} disabled={disabled} inline={inline} />
    </div>
  );
};

export default {
  title: "Atoms/Checkbox",
  decorators: [withKnobs]
};
