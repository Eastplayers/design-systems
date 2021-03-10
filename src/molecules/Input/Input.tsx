import React, { useState } from "react";
import { TextInput } from "../../atoms/TextInput";
import styles from "./Input.scss";
import classNames from "classnames";
import { InputLabelStyles } from "./types";
import { TextInputType } from "../../atoms/TextInput/types";
import { Icon } from "../../atoms/Icon";

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
  suffixIcon?: string | undefined;
  leadingIcon?: string | undefined;
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
    helperText,
    prefixIcon,
    suffixIcon,
    leadingIcon,
    trailingIcon,
    iconColor = styles.defaultColor
  } = props;
  const [isFocus, setFocus] = useState(false);
  const OnFocusHandler = () => {
    setFocus(true);
  };
  const OnBlurHandler = () => {
    setFocus(false);
  };

  const inputBorder =
    classNames(styles["input-border"], {
      [styles["input-border-mid-part-paragraph"]]:
        type === TextInputType.PARAGRAPH,
      [styles["input-border-state-filled"]]: filled,
      [styles["input-border-state-disabled"]]: disabled,
      [styles["input-border-state-focus"]]: isFocus,
      [styles["input-border-state-error"]]: !disabled && error
    }) +
    " " +
    className;
  //can put className for Input Component
  const inputLabel = classNames(styles["input-label"], {
    [styles["input-label-state-disabled"]]: disabled,
    [styles["input-label-state-error"]]: !disabled && error
  });
  const inputHelperText = classNames(styles["input-helper-text"], {
    [styles["input-helper-text-state-error"]]: error,
    [styles["input-helper-text-state-disabled"]]: disabled
  });

  return (
    <>
      {labelStyle === InputLabelStyles.TOP_LABEL && (
        <>
          <label className={inputLabel} htmlFor={label}>
            {label}
          </label>
          <div className={styles["input-top-label-space"]} />
        </>
      )}
      <div className={inputBorder}>
        <Icon
          size="22"
          className={styles["input-icon-leading"]}
          // will not display icon if input type is paragraph
          icon={type === TextInputType.PARAGRAPH ? "" : leadingIcon}
          //import disabledColor $gray400 from scss
          color={disabled ? styles.disabledColor : iconColor}
        />
        <div className={styles["input-border-mid-part"]}>
          {labelStyle === InputLabelStyles.CONTAINED_LABEL && (
            <label className={inputLabel} htmlFor={label}>
              {label}
            </label>
          )}
          <div className={styles["input-border-mid-part-content"]}>
            <Icon
              size="18"
              className={styles["input-icon-prefix"]}
              icon={type === TextInputType.PARAGRAPH ? "" : prefixIcon}
              color={disabled ? styles.disabledColor : iconColor}
            />
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
            />
            <Icon
              size="18"
              className={styles["input-icon-suffix"]}
              icon={type === TextInputType.PARAGRAPH ? "" : suffixIcon}
              color={disabled ? styles.disabledColor : iconColor}
            />
          </div>
        </div>
        <Icon
          size="22"
          className={styles["input-icon-trailing"]}
          icon={type === TextInputType.PARAGRAPH ? "" : trailingIcon}
          color={disabled ? styles.disabledColor : iconColor}
        />
      </div>
      <div className={inputHelperText}>{helperText}</div>
    </>
  );
};

export default Input;
