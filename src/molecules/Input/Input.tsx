import React, { useState } from "react";
import { Input } from "../../atoms/InputFields/Input";
import styles from "./Input.scss";
import classNames from "classnames";
import { InputLabelStyles } from "./types";
import { Label } from "../../atoms/Label";

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  filled?: boolean;
  labelStyle?: InputLabelStyles;
  error?: boolean;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  helperText?: string;
}
const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    id,
    width,
    filled,
    labelStyle = InputLabelStyles.TOP_LABEL,
    label = "",
    disabled,
    className,
    error,
    helperText,
    prefixIcon,
    suffixIcon,
    leadingIcon,
    trailingIcon,
    ...rest
  } = props;

  const [isFocus, setFocus] = useState(false);

  const onFocusHandler = () => {
    setFocus(true);
  };

  const onBlurHandler = () => {
    setFocus(false);
  };

  const inputClass = classNames(
    {
      [styles["input-disabled"]]: disabled,
      [styles["input-error"]]: !disabled && error,
      [styles["input-filled"]]: filled,
      [styles["input-focused"]]: isFocus,
      [styles["input-leading"]]: leadingIcon,
      [styles["input-prefix"]]: prefixIcon,
      [styles["input-trailing"]]: trailingIcon,
      [styles["input-top"]]: labelStyle === InputLabelStyles.TOP_LABEL
    },
    className
  );

  const topLabel = labelStyle === InputLabelStyles.TOP_LABEL;
  const containedLabel = labelStyle === InputLabelStyles.CONTAINED_LABEL;

  return (
    <div className={inputClass} style={{ width: width, minWidth: 300 }}>
      {topLabel && (
        <Label
          htmlFor={id || label}
          value={label}
          className={styles["input-label"]}
        />
      )}
      <div className={styles["input-border"]}>
        <div className={styles["input-icon"]}>{leadingIcon}</div>
        <div className={styles["input-border-midpart"]}>
          {containedLabel && (
            <Label
              htmlFor={id || label}
              value={label}
              className={styles["input-label"]}
            />
          )}
          <div className={styles["input-border-midpart-content"]}>
            <div className={styles["input-icon"]}>{prefixIcon}</div>
            <Input
              id={id}
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              label={label}
              disabled={disabled}
              {...rest}
            />
            <div className={styles["input-icon"]}>{suffixIcon}</div>
          </div>
        </div>
        <div className={styles["input-icon"]}>{trailingIcon}</div>
      </div>
      <div className={styles["input-helper"]}>{helperText}</div>
    </div>
  );
};

export default TextInput;
