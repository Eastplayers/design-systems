export interface ButtonProps {
  label: string;
  size?: ButtonSizes;
  variant?: ButtonVariants;
  disabled?: boolean;
}

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
