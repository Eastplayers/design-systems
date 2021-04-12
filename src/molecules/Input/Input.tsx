import React, { useState } from "react";
import { Input } from "../../atoms/InputFields/Input";
import styles from "./Input.scss";
import classNames from "classnames";
import { LabelStyles, Variants } from "../../atoms/InputFields/types";
import { Label } from "../../atoms/Label";

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  labelStyle?: string;
  error?: boolean;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  helperText?: string;
  variant?: string;
}
const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    id,
    width,
    labelStyle = LabelStyles.TOP_LABEL,
    label = "",
    disabled,
    className,
    error,
    helperText,
    prefixIcon,
    suffixIcon,
    leadingIcon,
    trailingIcon,
    variant = Variants.OUTLINED,
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
      [styles["input-error"]]: error,
      [styles["input-filled"]]: variant === Variants.FILLED,
      [styles["input-focused"]]: isFocus,
      [styles["input-leading"]]: leadingIcon,
      [styles["input-prefix"]]: prefixIcon,
      [styles["input-trailing"]]: trailingIcon,
      [styles["input-top"]]: labelStyle === LabelStyles.TOP_LABEL
    },
    className
  );

  const topLabel = labelStyle === LabelStyles.TOP_LABEL;
  const containedLabel = labelStyle === LabelStyles.CONTAINED_LABEL;

  return (
    <div className={inputClass} style={{ width: width, minWidth: 300 }}>
      {topLabel && (
        <Label
          id="top-label"
          htmlFor={id || label}
          value={label}
          className={styles["input-label"]}
        />
      )}
      <div className={styles["input-border"]}>
        <div id="leadingIcon" className={styles["input-icon"]}>
          {leadingIcon}
        </div>
        <div className={styles["input-border-midpart"]}>
          {containedLabel && (
            <Label
              id="contained-label"
              htmlFor={id || label}
              value={label}
              className={styles["input-label"]}
            />
          )}
          <div className={styles["input-border-midpart-content"]}>
            <div id="prefixIcon" className={styles["input-icon"]}>
              {prefixIcon}
            </div>
            <Input
              id={id}
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              label={label}
              disabled={disabled}
              {...rest}
            />
            <div id="suffixIcon" className={styles["input-icon"]}>
              {suffixIcon}
            </div>
          </div>
        </div>
        <div id="trailingIcon" className={styles["input-icon"]}>
          {trailingIcon}
        </div>
      </div>
      <div className={styles["input-helper"]}>{helperText}</div>
    </div>
  );
};

export default TextInput;
