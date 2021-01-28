import React from "react";

interface ITemplate {
  children: React.ReactNode | string;
  onClick: (e: React.MouseEvent) => void;
}

const Template: React.FC<ITemplate> = (props) => {
  return <div onClick={props.onClick}>{props.children}</div>;
};

Template.defaultProps = {
  children: "Template",
};

export default Template;
