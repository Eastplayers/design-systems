import IcomoonReact from "icomoon-react";
import React from "react";
import iconSet from "./selection.json";

export interface IconProps {
  color?: string;
  size?: number | string;
  className?: string;
  stroke?: string;
  style?: React.CSSProperties;
}

const LikeIcon: React.FC<IconProps> = (props) => {
  const { style, color = "", size = 28, className = "" } = props;

  return (
    <div>
      <IcomoonReact
        className={className}
        iconSet={iconSet}
        color={color}
        size={size}
        icon="like"
        style={style}
      />
    </div>
  );
};

export default LikeIcon;
