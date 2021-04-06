import React from "react";
import classNames from "classnames";
import styles from "./Textarea.scss";

export interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label?: string;
  id?: string;
}
const Textarea: React.FC<TextareaProps> = (props) => {
  const { label, id, ...rest } = props;

  const textarea = classNames(styles["textarea-input"]);

  return <textarea id={id || label} className={textarea} {...rest} />;
};

export default Textarea;
