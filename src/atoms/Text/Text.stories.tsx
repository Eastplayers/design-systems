import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";

import { Text } from ".";
import { FontTypes, TextProps } from "./Text";

export const All = (): React.ReactElement<TextProps> => {
  const content = text("Content", "Sample content");

  return (
    <div>
      {Object.values(FontTypes).map((fontType) => (
        <div key={fontType} style={{ marginBottom: 20 }}>
          <Text type={fontType}>{fontType.split("-").join(" ")}</Text>
          <Text type={fontType}>{content}</Text>
        </div>
      ))}
    </div>
  );
};

export default {
  title: "Atoms/Text",
  decorators: [withKnobs]
};
