import React from "react";
import classNames from "classnames";

import { ButtonSizes, ButtonVariants } from "./types";
import { Text, FontTypes } from "../../atoms";

import styles from "./Button.scss";

export interface ButtonProps {
  label: string;
  size?: ButtonSizes;
  variant?: ButtonVariants;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ButtonFontMapping = new Map<ButtonSizes, FontTypes>([
  [ButtonSizes.L, FontTypes.HEADING_4],
  [ButtonSizes.M, FontTypes.HEADING_4],
  [ButtonSizes.S, FontTypes.HEADING_5],
  [ButtonSizes.XS, FontTypes.HEADING_6]
]);

const Button: React.FC<ButtonProps> = (props) => {
  const {
    label,
    size = ButtonSizes.S,
    variant = ButtonVariants.Primary,
    disabled,
    onClick
  } = props;

  const buttonClasses = classNames(styles.btn, {
    [styles["btn--primary"]]: variant === ButtonVariants.Primary,
    [styles["btn--secondary"]]: variant === ButtonVariants.Secondary,
    [styles["btn--ghost"]]: variant === ButtonVariants.Ghost,
    [styles["btn--link"]]: variant === ButtonVariants.Link,
    [styles["btn--lg"]]: size === ButtonSizes.L,
    [styles["btn--md"]]: size === ButtonSizes.M,
    [styles["btn--sm"]]: size === ButtonSizes.S,
    [styles["btn--xs"]]: size === ButtonSizes.XS,
    [styles["btn--disabled"]]: disabled
  });

  return (
    <button onClick={onClick} className={buttonClasses}>
      <Text type={ButtonFontMapping.get(size)}>{label}</Text>
    </button>
  );
};

export default Button;
