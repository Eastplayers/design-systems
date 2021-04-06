import React from "react";
import classNames from "classnames";
import styles from "./Input.scss";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  id?: string;
}
const Input: React.FC<InputProps> = (props) => {
  const { label, id, ...rest } = props;

  const textInput = classNames(styles["text-input"]);

  return <input id={id || label} className={textInput} {...rest} />;
};

export default Input;
