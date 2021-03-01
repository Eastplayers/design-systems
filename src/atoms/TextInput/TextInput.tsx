import React from "react";
import { TextInputType } from "./types";
import classNames from "classnames";
import styles from "./TextInput.scss";

export interface TextInputProps {
  type?: string;
  label?: string;
  maxLength?: number;
  placeholder?: string;
  onChange?: (
    e: React.ChangeEvent | React.FormEvent<HTMLElement>
  ) => void | undefined;
  CountCharacter?: (
    e: React.ChangeEvent | React.FormEvent<HTMLElement>
  ) => void | undefined;
  onFocus?: () => void;
  onBlur?: () => void;
  style?: Record<string, unknown>;
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
    CountCharacter,
    onFocus,
    onBlur,
    style,
    disabled
  } = props;

  const renderTag = (): string => {
    if (type === TextInputType.PARAGRAPH) return "textarea";
    return "input";
  };

  const textInput = classNames(styles["text-input"]);
  const CustomTag = renderTag() as keyof JSX.IntrinsicElements;

  return (
    <CustomTag
      id={label}
      disabled={disabled}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={(e: any) => {
        onChange && onChange(e);
        CountCharacter && CountCharacter(e);
      }}
      className={textInput}
      onFocus={onFocus}
      onBlur={onBlur}
      style={style}
    />
  );
};

export default TextInput;
