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

  const buttonClasses = classNames(styles.btn, {
    [styles["btn--primary"]]: variant === ButtonVariants.Primary,
    [styles["btn--secondary"]]: variant === ButtonVariants.Secondary,
    [styles["btn--ghost"]]: variant === ButtonVariants.Ghost,
    [styles["btn--link"]]: variant === ButtonVariants.Link,
    [styles["btn--lg"]]: size === ButtonSizes.L,
    [styles["btn--md"]]: size === ButtonSizes.M,
    [styles["btn--sm"]]: size === ButtonSizes.S,
    [styles["btn--xs"]]: size === ButtonSizes.XS
  });

  return (
    <button className={buttonClasses}>
      <Text>{label}</Text>
    </button>
  );
};

export default Button;
