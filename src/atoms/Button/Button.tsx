import React from "react";
import styled from "styled-components";

const ThemeButton = styled.button``;

enum ButtonSizes {
  L,
  M,
  S,
  XS
}

enum ButtonVariants {
  Primary,
  Secondary,
  Ghost,
  Link
}

interface ButtonProps {
  size?: ButtonSizes;
  variants?: ButtonVariants;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <ThemeButton>heheheh</ThemeButton>;
};

Button.defaultProps = {
  size: ButtonSizes.S,
  variants: ButtonVariants.Primary
};

export default Button;
