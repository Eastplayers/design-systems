import React from "react";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";

import { Radio } from ".";
import { RadioProps, RadioSizes } from "./types";

export const All = (): React.ReactElement<RadioProps> => {
  const label = text("Label", "Sample content");
  const size = select("Size", RadioSizes, RadioSizes.NORMAL);
  const disabled = boolean("Disabled", false);
  const inline = boolean("Inline", false);

  return (
    <div>
      <Radio
        defaultChecked
        label={label}
        name="testing"
        size={size}
        disabled={disabled}
        inline={inline}
      />
      <Radio
        label={label}
        name="testing"
        size={size}
        disabled={disabled}
        inline={inline}
      />
    </div>
  );
};

export default {
  title: "Atoms/Radio",
  decorators: [withKnobs]
};
