import React from "react";

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
  size?: ButtonSizes;
  variant?: ButtonVariants;
  title?: string;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    title,
    size = ButtonSizes.S,
    variant = ButtonVariants.Primary
  } = props;

  return <button>{title}</button>;
};

export default Button;
