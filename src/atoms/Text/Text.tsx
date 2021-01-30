import React from "react";
import ClassNames from "classnames";

import { FontTypes, FontWeights, TextDecorations } from "./types";
import styles from "./Text.scss";

export interface TextProps {
  children: React.ReactNode | string;
  className?: string;
  type?: FontTypes;
  weight?: FontWeights;
  size?: number;
  lineHeight?: number;
  color?: string;
  decoration?: TextDecorations;
}

const Text: React.FC<TextProps> = (props) => {
  const {
    className,
    children,
    type = FontTypes.BODY_2,
    weight = FontWeights.NORMAL,
    decoration = TextDecorations.NONE,
    color
  } = props;

  const renderTag = (): string => {
    const typeList: string[] = type?.split("-") || [];
    if (typeList[0] === "heading") return `h${typeList[1]}`;
    if (typeList[0] === "display") return "h1";
    return "p";
  };

  const CustomTag = renderTag() as keyof JSX.IntrinsicElements;

  return (
    <CustomTag
      className={ClassNames(
        styles[type],
        styles[decoration],
        {
          [styles["text-400"]]: weight === FontWeights.NORMAL,
          [styles["text-700"]]: weight === FontWeights.BOLD,
          [styles["text-800"]]: weight === FontWeights.EXTRA_BOLD
        },
        className
      )}
      style={{ color }}
    >
      {children}
    </CustomTag>
  );
};

export default Text;
