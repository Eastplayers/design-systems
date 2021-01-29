import React from "react";
import { withKnobs, text, select, color } from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";

import { Text } from ".";
import { FontTypes, TextDecorations, TextProps, FontWeights } from "./Text";

export const All = (): React.ReactElement<TextProps> => {
  const content = text("Content", "Sample content");
  const decoration = select(
    "Decoration",
    TextDecorations,
    TextDecorations.NONE
  );
  const textColor = color("Color", "black");
  const weight = select("Weight", FontWeights, undefined);

  return (
    <div>
      {Object.values(FontTypes).map((fontType) => (
        <div key={fontType} style={{ marginBottom: 20 }}>
          <Text type={fontType} color={textColor}>
            {fontType.split("-").join(" ")}
          </Text>
          <Text
            type={fontType}
            decoration={decoration}
            color={textColor}
            weight={weight}
          >
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
