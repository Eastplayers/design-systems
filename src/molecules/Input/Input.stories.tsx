import { color, select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Input } from ".";
import { InputPositions, InputStyles, InputTypes } from "./types";
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
  const position = select("Icon Position", InputPositions, InputPositions.NONE);
  const iconsList = iconSet.icons.map((icon) => {
    return icon.properties.name;
  });
  const prefixIcon = select("Prefix Icon", iconsList, iconsList[0]);
  const suffixIcon = select("Suffix Icon", iconsList, iconsList[0]);
  const type = select("Input Types", InputTypes, InputTypes.LEADING)
  const helper = text("Helper Text","")
  return (
    <Input
      label={label}
      style={style}
      position={position}
      iconColor={iconColor}
      prefixIcon={prefixIcon}
      suffixIcon={suffixIcon}
      type={type}
      helper={helper}
    >
      {placeHolder}
    </Input>
  );
};

export default {
  title: "Molecules/Input",
  decorators: [withKnobs]
};
