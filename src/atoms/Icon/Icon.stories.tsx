// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import React from "react";
import { withKnobs, number, color } from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";
import { Icon } from ".";
import { IconProps } from "./Icon";
import iconSet from "./selection.json";
import "./Icon.scss";

export const Icons = (): React.ReactElement<IconProps> => {
  // const iconList = select("Icon", IconList, IconList.LIKE);
  const size = number("Size", 28);
  const fillColor = color("Fill Color", "");

  const iconList = [];
  for (let i = 0; i < iconSet.icons.length; i++) {
    iconList.push(iconSet.icons[i].icon.tags[0]);
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {iconList.map((value) => {
        return (
          <div
            style={{
              width: 110,
              height: 80,
              display: "flex",
              margin: 5,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #a6a9b6 ",
            }}
            key={value}
          >
            <Icon
              icon={value}
              size={size}
              color={fillColor}
              style={{ display: "inline" }}
              stroke="blue"
            />
            <div
              style={{
                borderRadius: 4,
                backgroundColor: "#f4f5db",
                color: "#a6a9b6",
                padding: 4,
                fontSize: 12,
                marginTop: 10,
                width: "90%",
                textAlign: "center",
              }}
            >
              {value}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const AllStories = (): React.ReactElement<IconProps> => {
  // const iconList = select("Icon", IconList, IconList.LIKE);
  const size = number("Size", 28);
  const fillColor = color("Fill Color", "");

  const iconList = [];
  for (let i = 0; i < iconSet.icons.length; i++) {
    iconList.push(iconSet.icons[i].icon.tags[0]);
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {iconList.map((value) => {
        return (
          <Icon
            key={value}
            icon={value}
            size={size}
            color={fillColor}
            style={{ display: "inline" }}
            stroke="blue"
          />
        );
      })}
    </div>
  );
};

export default {
  title: "Atoms/Icon",
  decorators: [withKnobs]
};
