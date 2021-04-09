import React from "react";
import classNames from "classnames";
import styles from "./Label.scss";

export interface LableProps extends React.HTMLProps<HTMLLabelElement> {
  value?: string;
  className?: string;
  children?: string;
}
const Label: React.FC<LableProps> = (props) => {
  const { value, className, children, ...rest } = props;
  const labelClass = classNames(styles["label"], className);
  return (
    <label className={labelClass} {...rest}>
      {children || value}
    </label>
  );
};
export default Label;
