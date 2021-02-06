import { color, select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Input } from ".";
import { InputPosition, InputStyles } from "./types";

export const InputStory = (): React.ReactElement => {
  const label = text("Label", "Label");
  const placeHolder = text("Place Holder", "Placeholder Text");
  const style = select(
    "Label Styles",
    InputStyles,
    InputStyles.CONTAINED_LABEL
  );
  const iconColor = color("Icon Color", "black");
  const icon = text("Icon", "calendar");
  const position = select("Icon Position", InputPosition, InputPosition.NONE);
  return (
    <Input
      label={label}
      style={style}
      position={position}
      iconColor={iconColor}
      icon={icon}
    >
      {placeHolder}
    </Input>
  );
};

export default {
  title: "Molecules/Input",
  decorators: [withKnobs]
};
