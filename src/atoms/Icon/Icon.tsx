import IcomoonReact from "icomoon-react";
import React from "react";
import iconSet from "./selection.json";

export interface IconProps {
  color?: string;
  size?: number | string;
  icon: string | undefined;
  className?: string;
  stroke?: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = (props) => {
  const { style, color = "", size = 28, icon, className = "" } = props;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IcomoonReact
        className={className}
        iconSet={iconSet}
        color={color}
        size={size}
        icon={icon}
        style={style}
      />
    </div>
  );
};

export default Icon;
