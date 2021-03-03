import React, { useState } from "react";
import { TextInput } from "../../atoms/TextInput";
import styles from "./Input.scss";
import classNames from "classnames";
import { InputLabelStyles } from "./types";

export interface InputProps {
  filled?: boolean;
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
  leadingIcon?: string;
  trailingIcon?: string;
  iconColor?: string;
  helperText?: string;
}
const Input: React.FC<InputProps> = (props) => {
  const {
    filled,
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
    error,
    helperText
  } = props;
  const [isFocus, setFocus] = useState(false);
  const OnFocusHandler = () => {
    setFocus(true);
  };
  const OnBlurHandler = () => {
    setFocus(false);
  };

  const inputBorder = classNames(styles["input-border"], {
    [styles["input-border-filled"]]: filled,
    [styles["input-border-disabled"]]: disabled,
    [styles["input-border-focus"]]: isFocus,
    [styles["input-border-error"]]: !disabled && error
  });
  const inputLabel = classNames(styles["input-label"], {
    [styles["input-label-disabled"]]: disabled,
    [styles["input-label-error"]]: !disabled && error
  });
  const inputHelperText = classNames(styles["input-helper-text"], {
    [styles["input-helper-text-error"]]: error
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
        />
      </div>
      <div className={inputHelperText}>{helperText}</div>
    </>
  );
};

export default Input;
