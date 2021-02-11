import {
  boolean,
  color,
  number,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import React from "react";
import { Input } from ".";
import { InputPositions, InputStyles, InputTypes } from "./types";
import iconSet from "../../atoms/Icon/selection.json";

export const InputStory = (): React.ReactElement => {
  const iconsList = iconSet.icons.map((icon) => {
    return icon.properties.name;
  });
  const label = text("Label", "Label");
  const placeholder = text("Placeholder", "Placeholder Text");
  const style = select(
    "Label Styles",
    InputStyles,
    InputStyles.CONTAINED_LABEL
  );
  const iconColor = color("Icon Color", "black");
  const position = select("Icon Position", InputPositions, InputPositions.NONE);
  const prefixIcon = select("Prefix Icon", iconsList, iconsList[0]);
  const suffixIcon = select("Suffix Icon", iconsList, iconsList[0]);
  const type = select("Input Types", InputTypes, InputTypes.LEADING);
  const helper = text("Helper Text", "");
  const width = number("Width of Input", 255);
  const maxLength = number("Max length", 30);
  const paragraph = boolean("Paragraph", false);
  const disabled = boolean("Disabled", false);
  return (
    <div style={{ width: width }}>
      <Input
        label={label}
        style={style}
        position={position}
        iconColor={iconColor}
        prefixIcon={prefixIcon}
        suffixIcon={suffixIcon}
        type={type}
        helper={helper}
        maxLength={maxLength}
        placeholder={placeholder}
        paragraph={paragraph}
        disabled={disabled}
      />
    </div>
  );
};

export default {
  title: "Molecules/Input",
  decorators: [withKnobs]
};
