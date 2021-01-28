import React from "react";
import classNames from "classnames";

import { Text } from "../../atoms";

import styles from "./Button.scss";

export enum ButtonSizes {
  L = "L",
  M = "M",
  S = "S",
  XS = "XS"
}

export enum ButtonVariants {
  Primary = "Primary",
  Secondary = "Secondary",
  Ghost = "Ghost",
  Link = "Link"
}

export interface ButtonProps {
  label: string;
  size?: ButtonSizes;
  variant?: ButtonVariants;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    label,
    size = ButtonSizes.S,
    variant = ButtonVariants.Primary
  } = props;

  return (
    <button className={classNames(styles.btn__base, styles["btn--primary"])}>
      <Text>{label}</Text>
    </button>
  );
};

export default Button;
