import React from "react";
import classNames from "classnames";
import styles from "./TextareaInput.scss";

export interface TextareaInputProps
  extends React.HTMLProps<HTMLTextAreaElement> {
  type?: string;
  label?: string;
  maxLength?: number;
  placeholder?: string;
  countCharacter?: (
    e: React.ChangeEvent | React.FormEvent<HTMLElement>
  ) => void | undefined;
  style?: React.CSSProperties;
  disabled?: boolean;
  className?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  iconColor?: string;
}
const TextareaInput: React.FC<TextareaInputProps> = (props) => {
  const {
    label,
    maxLength,
    placeholder,
    onChange,
    countCharacter,
    onFocus,
    onBlur,
    style,
    disabled,
    ...rest
  } = props;

  const textInput = classNames(styles["textarea-input"]);

  return (
    <textarea
      {...rest}
      id={label}
      disabled={disabled}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={(e) => {
        onChange && onChange(e);
        countCharacter && countCharacter(e);
      }}
      className={textInput}
      onFocus={onFocus}
      onBlur={onBlur}
      style={style}
    />
  );
};

export default TextareaInput;
