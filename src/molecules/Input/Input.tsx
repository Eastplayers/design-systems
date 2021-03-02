import React, { useState } from "react";
import { TextInput } from "../../atoms/TextInput";
import styles from "./Input.scss";
import classNames from "classnames";
import { InputLabelStyles } from "./types";

export interface InputProps {
  labelStyle?: string;
  error?: boolean;

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
  textStyle?: React.CSSProperties;
  disabled?: boolean;
  className?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  iconColor?: string;
}
const Input: React.FC<InputProps> = (props) => {
  const {
    labelStyle,
    label,
    type,
    maxLength,
    placeholder,
    onChange,
    CountCharacter,
    textStyle,
    disabled,
    className,
    prefixIcon,
    suffixIcon,
    iconColor,
    error
  } = props;
  const [isFocus, setFocus] = useState(false);
  const OnFocusHandler = () => {
    setFocus(true);
  };
  const OnBlurHandler = () => {
    setFocus(false);
  };

  const inputBorder = classNames(styles["input-border"], {
    [styles["input-border-error"]]: error,
    [styles["input-border-disabled"]]: disabled,
    [styles["input-border-focus"]]: isFocus
  });
  const inputLabel = classNames(styles["input-label"], {
    [styles["input-label-disabled"]]: disabled,
    [styles["input-label-error"]]: error
  });
  return (
    <>
      {labelStyle === InputLabelStyles.TOP_LABEL && (
        <label className={inputLabel} htmlFor={label}>
          {label}
        </label>
      )}
      <div className={inputBorder}>
        {labelStyle === InputLabelStyles.CONTAINED_LABEL && (
          <label className={inputLabel} htmlFor={label}>
            {label}
          </label>
        )}
        <TextInput
          label={label}
          type={type}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={onChange}
          CountCharacter={CountCharacter}
          onFocus={OnFocusHandler}
          onBlur={OnBlurHandler}
          style={textStyle}
          disabled={disabled}
          className={className}
          prefixIcon={prefixIcon}
          suffixIcon={suffixIcon}
          iconColor={iconColor}
        />
      </div>
    </>
  );
};

export default Input;
