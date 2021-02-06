import { color, select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Input } from ".";
import { InputPosition, InputStyles } from "./types";
import iconSet from "../../atoms/Icon/selection.json";

export const InputStory = (): React.ReactElement => {
  const label = text("Label", "Label");
  const placeHolder = text("Place Holder", "Placeholder Text");
  const style = select(
    "Label Styles",
    InputStyles,
    InputStyles.CONTAINED_LABEL
  );
  const iconColor = color("Icon Color", "black");
  const position = select("Icon Position", InputPosition, InputPosition.PREFIX);
  const iconsList = iconSet.icons.map((icon) => {
    return icon.properties.name;
  });
  const listIcon = select("Icons List", iconsList, iconsList[0]);
  return (
    <Input
      label={label}
      style={style}
      position={position}
      iconColor={iconColor}
      icon={listIcon}
    >
      {placeHolder}
    </Input>
  );
};

export default {
  title: "Molecules/Input",
  decorators: [withKnobs]
};
