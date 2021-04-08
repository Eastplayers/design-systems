import React from "react";
import classNames from "classnames";
import styles from "./Textarea.scss";

export interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label?: string;
  id?: string;
  resize?:boolean
}
const Textarea: React.FC<TextareaProps> = (props) => {
  const { label, id, className, resize, ...rest } = props;

  const textarea = classNames(
    { [styles["textarea-resize"]]: resize },
    styles["textarea"],
    className
  );

  return <textarea id={id || label} className={textarea} {...rest} />;
};

export default Textarea;
