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
  icon?: React.ReactElement;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

enum IconSizes {
  L = 20,
  M = 20,
  S = 18,
  XS = 16
}

const IconSizeMapping = new Map<ButtonSizes, IconSizes>([
  [ButtonSizes.L, IconSizes.L],
  [ButtonSizes.M, IconSizes.M],
  [ButtonSizes.S, IconSizes.S],
  [ButtonSizes.XS, IconSizes.XS]
]);

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
    icon,
    onClick
  } = props;
  const buttonClasses = classNames(styles.btn, {
    [styles["btn--primary"]]: variant === ButtonVariants.Primary,
    [styles["btn--secondary"]]: variant === ButtonVariants.Secondary,
    [styles["btn--ghost"]]: variant === ButtonVariants.Ghost,
    [styles["btn--lg"]]: size === ButtonSizes.L,
    [styles["btn--md"]]: size === ButtonSizes.M,
    [styles["btn--sm"]]: size === ButtonSizes.S,
    [styles["btn--xs"]]: size === ButtonSizes.XS,
    [styles["btn--disabled"]]: disabled
  });
  if (icon) {
    const iconSize = IconSizeMapping.get(size);
    const Icon: React.ReactElement = React.cloneElement(icon, {
      size: iconSize
    });
    return (
      <button onClick={onClick} className={buttonClasses}>
        <div className={styles.container}>
          <Text type={ButtonFontMapping.get(size)}>{label}</Text>
          {Icon}
        </div>
      </button>
    );
  }
  return (
    <button onClick={onClick} className={buttonClasses}>
      <div className={styles.container}>
        <Text type={ButtonFontMapping.get(size)}>{label}</Text>
      </div>
    </button>
  );
};

export default Button;
