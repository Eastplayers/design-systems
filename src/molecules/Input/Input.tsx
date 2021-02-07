import React from "react";
import { Text } from "../../atoms";
import styles from "./Input.scss";
import classNames from "classnames";
import { InputStyles, InputTypes } from "./types";
import { Icon } from "../../atoms/Icon";

export interface InputProps {
  style?: string;
  type?: string | undefined;
  position?: string;
  helper?: string;
  state?: string;
  label?: string;
  children?: string;
  iconColor?: string;
  prefixIcon?: string | undefined;
  suffixIcon?: string | undefined;
}
const Input: React.FC<InputProps> = (props) => {
  const {
    style = "contained label",
    label = "Label",
    position = "prefix",
    helper,
    state,
    children = "Placeholder Text",
    iconColor,
    prefixIcon,
    suffixIcon,
    type
  } = props;
  const topAllignedLabel = classNames(styles["input-label"], {
    [styles["top-label"]]: style === InputStyles.TOP_LABEL
  });
  const containedLabel = classNames(styles["input-label"], {
    [styles["contained-label"]]: style === InputStyles.CONTAINED_LABEL
  });
  const iconPosition = classNames(styles["content-container"], {
    [styles["prefix"]]: position === "prefix",
    [styles["suffix"]]: position === "suffix",
    [styles["after-input-icon-container"]]: position === "suffix",
    [styles["both"]]: position === "both"
  });

  const typeIcon = classNames(styles["input-border"], {
    [styles["leading"]]: type === InputTypes.LEADING,
    [styles["trailing"]]: type === InputTypes.TRAILING
  });

  const helperText = classNames({
    [styles["helper-text"]]: helper !== ""
  });

  return (
    <div className="input-component">
      <div className={topAllignedLabel}>{label}</div>
      <div className={typeIcon}>
        <div className="  input-icon leading-input-icon-container ">
          <Icon icon={prefixIcon} size={18} color={iconColor} />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <div className={containedLabel}>{label}</div>
          <div className={iconPosition}>
            <div className="input-icon prefix-input-icon ">
              <Icon icon={prefixIcon} size={18} color={iconColor} />
            </div>
            <Text className="placeholder-text">{children}</Text>
            <div className="input-icon suffix-input-icon ">
              <Icon icon={suffixIcon} size={18} color={iconColor} />
            </div>
          </div>
        </div>
        <div className=" input-icon trailing-input-icon-container ">
          <Icon icon={suffixIcon} size={18} color={iconColor} />
        </div>
      </div>
      <div className={helperText}>{helper}</div>
    </div>
  );
};

export default Input;
