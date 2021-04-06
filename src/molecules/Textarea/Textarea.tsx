import React, { useState } from "react";
import { Textarea } from "../../atoms/InputFields/Textarea";
import styles from "./Textarea.scss";
import classNames from "classnames";
import { InputLabelStyles } from "./types";
import { Label } from "../../atoms/Label";

export interface TextareaInputProps
  extends React.HTMLProps<HTMLTextAreaElement> {
  id?: string;
  width?: number;
  filled?: boolean;
  labelStyle?: string;
  error?: boolean;
  label?: string;
  maxLength?: number;
  placeholder?: string;
  textStyle?: React.CSSProperties;
  disabled?: boolean;
  className?: string;
  helperText?: string;
}
const TextareaInput: React.FC<TextareaInputProps> = (props) => {
  const {
    width,
    filled,
    labelStyle,
    label = "",
    disabled,
    className,
    error,
    helperText,
    ...rest
  } = props;

  const [isFocus, setFocus] = useState(false);

  const onFocusHandler = () => {
    setFocus(true);
  };
  const onBlurHandler = () => {
    setFocus(false);
  };

  const inputBorder = classNames(className, styles["input-border"], {
    [styles["input-border-margin-top"]]:
      labelStyle === InputLabelStyles.TOP_LABEL,
    [styles["input-border-state-filled"]]: filled,
    [styles["input-border-state-disabled"]]: disabled,
    [styles["input-border-state-focus"]]: isFocus,
    [styles["input-border-state-error"]]: !disabled && error
  });
  const inputLabel = classNames({
    [styles["input-label-state-disabled"]]: disabled,
    [styles["input-label-state-error"]]: !disabled && error
  });
  const inputHelperText = classNames(styles["input-helper-text"], {
    [styles["input-helper-text-state-error"]]: error,
    [styles["input-helper-text-state-disabled"]]: disabled
  });
  const topLabel = labelStyle === InputLabelStyles.TOP_LABEL;
  const containedLabel = labelStyle === InputLabelStyles.CONTAINED_LABEL;
  return (
    <div style={{ width: width, minWidth: 300 }}>
      {topLabel && (
        <Label htmlFor={label} value={label} className={inputLabel} />
      )}
      <div className={inputBorder}>
        <div className={styles["input-border-mid-part"]}>
          {containedLabel && (
            <Label htmlFor={label} value={label} className={inputLabel} />
          )}
          <div className={styles["input-border-mid-part-content"]}>
            <Textarea
              label={label}
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              {...rest}
            />
          </div>
        </div>
      </div>
      <div className={inputHelperText}>{helperText}</div>
    </div>
  );
};

export default TextareaInput;
