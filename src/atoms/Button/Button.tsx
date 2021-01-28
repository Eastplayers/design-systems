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

  return <button>{label}</button>;
};

export default Button;
