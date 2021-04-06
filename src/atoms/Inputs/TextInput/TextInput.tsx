import React from "react";
import { TextInputType } from "../types";
import classNames from "classnames";
import styles from "./TextInput.scss";

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
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
const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    type,
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

  const textInput = classNames(styles["text-input"]);

  return (
    <input
      {...rest}
      id={label}
      disabled={disabled}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={(e: any) => {
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

export default TextInput;
