import React from "react";
import { withKnobs, text, select, color } from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";

import { Text } from ".";
import { TextProps } from "./Text";
import { FontTypes, TextDecorations, FontWeights } from "./types";

export const All = (): React.ReactElement<TextProps> => {
  const content = text("Content", "Sample content");
  const decoration = select(
    "Decoration",
    TextDecorations,
    TextDecorations.NONE
  );
  const weight = select("Weight", FontWeights, undefined) as FontWeights;

  return (
    <div>
      {Object.values(FontTypes).map((fontType) => (
        <div key={fontType} style={{ marginBottom: 20 }}>
          <Text type={fontType}>{fontType.split("-").join(" ")}</Text>
          <Text type={fontType} decoration={decoration} weight={weight}>
            {content}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default {
  title: "Atoms/Text",
  decorators: [withKnobs]
};
