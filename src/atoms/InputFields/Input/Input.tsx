import React from "react";
import classNames from "classnames";
import styles from "./Input.scss";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  id?: string;
  className?: string;
}
const Input: React.FC<InputProps> = (props) => {
  const { label, id, className, ...rest } = props;

  const textInput = classNames(styles["text-input"], className);

  return <input id={id || label} className={textInput} {...rest} />;
};

export default Input;
