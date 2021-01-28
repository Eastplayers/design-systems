import React from "react";
import ClassNames from "classnames";
import styles from "./Text.scss";

export enum FontTypes {
  BODY_1 = "body-1",
  BODY_2 = "body-2",
  BODY_3 = "body-3",
  BODY_4 = "body-4",
  HEADING_1 = "heading-1",
  HEADING_2 = "heading-2",
  HEADING_3 = "heading-3",
  HEADING_4 = "heading-4",
  HEADING_5 = "heading-5",
  HEADING_6 = "heading-6",
  DISPLAY_1 = "display-1",
  DISPLAY_2 = "display-2",
  DISPLAY_3 = "display-3"
}

enum FontWeights {
  NORMAL = 400,
  BOLD = 700,
  EXTRA_BOLD = 800
}

export enum TextDecorations {
  NONE = "none",
  UNDERLINE = "underline",
  LINE_THROUGH = "line-through"
}

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
      className={ClassNames(styles[type], styles[decoration], className)}
      style={{ color }}
    >
      {children}
    </CustomTag>
  );
};

export default Text;
