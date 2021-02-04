// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import React from "react";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";

import { Icon } from ".";
import { IconProps } from "./Icon";
import iconSet from "./selection.json";

import "./Icon.scss";

export const Icons = (): React.ReactElement<IconProps> => {
  const size = number("Size", 28);
  const fillColor = color("Fill Color", "#334155");

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridAutoRows: "1fr",
        gap: 10
      }}
    >
      {iconSet.icons.map((icon) => {
        const iconName = icon.properties.name;
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid lightgray",
              padding: "10px 20px"
            }}
            key={iconName}
          >
            <Icon
              icon={iconName}
              size={size}
              color={fillColor}
              style={{ display: "inline" }}
              stroke="blue"
            />
            <div
              style={{
                borderRadius: 4,
                backgroundColor: "#f1f5f9",
                color: "#64748b",
                padding: "5px 10px",
                fontSize: "0.875rem",
                marginTop: 20,
                width: "90%",
                textAlign: "center",
                fontFamily: "monospace",
                fontWeight: "bold"
              }}
            >
              {iconName}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: "Atoms/Icon",
  decorators: [withKnobs]
};
