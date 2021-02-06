import React from "react";
import { Text } from "../../atoms";
import styles from "./Input.scss";
import classNames from "classnames";
import { InputStyles } from "./types";
import { Icon } from "../../atoms/Icon";

export interface InputProps {
  style?: string;
  type?: string;
  position?: string;
  helper?: string;
  state?: string;
  label?: string;
  children?: string;
  iconColor?: string;
  icon?: string | undefined;
}
const Input: React.FC<InputProps> = (props) => {
  const {
    style = "contained label",
    label = "Label",
    type,
    position = "prefix",
    helper,
    state,
    children = "Placeholder Text",
    iconColor,
    icon
  } = props;
  const topAllignedLabel = classNames(styles["input-label"], {
    [styles["top-label"]]: style === InputStyles.TOP_LABEL
  });
  const containedLabel = classNames(styles["input-label"], {
    [styles["contained-label"]]: style === InputStyles.CONTAINED_LABEL
  });
  const iconPosition = classNames({
    [styles["none"]]: position === "none",
    [styles["prefix"]]: position === "prefix",
    [styles["suffix"]]: position === "suffix"
  });

  return (
    <div>
      <div className={topAllignedLabel}>{label}</div>
      <div className="input-border">
        <div className={containedLabel}>{label}</div>
        <div className={iconPosition}>
          <Icon
            className="input-icon"
            icon={icon}
            size="16px"
            color={iconColor}
          />
          <Text className="placeholder-text">{children}</Text>
        </div>
      </div>
    </div>
  );
};

export default Input;
