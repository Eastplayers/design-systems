import React, { useState } from "react";
import { Input } from "../../atoms/InputFields/Input";
import styles from "./Input.scss";
import classNames from "classnames";
import { InputLabelStyles } from "./types";
import { Label } from "../../atoms/Label";

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  id?: string;
  width?: number;
  filled?: boolean;
  labelStyle?: string;
  error?: boolean;
  label?: string;
  disabled?: boolean;
  className?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  helperText?: string;
}
const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    width,
    filled,
    labelStyle,
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
  const OnFocusHandler = () => {
    setFocus(true);
  };
  const OnBlurHandler = () => {
    setFocus(false);
  };

  const borderClass = classNames(styles["input-border"], {
    [styles["input-border-margin-top"]]:
      labelStyle === InputLabelStyles.TOP_LABEL,
    [styles["input-border-state-filled"]]: filled,
    [styles["input-border-state-disabled"]]: disabled,
    [styles["input-border-state-focus"]]: isFocus,
    [styles["input-border-state-error"]]: !disabled && error
  });
  const labelClass = classNames({
    [styles["input-label-state-disabled"]]: disabled,
    [styles["input-label-state-error"]]: !disabled && error
  });
  const midPartClass = classNames(styles["input-border-mid-part"], {
    [styles["input-border-mid-part-margin-left"]]: leadingIcon,
    [styles["input-border-mid-part-margin-right"]]: trailingIcon
  });
  const contentClass = classNames(styles["input-border-mid-part-content"],{
    [styles["input-border-mid-part-content-margin-right"]]:prefixIcon
  })
  const inputHelperText = classNames(styles["input-helper-text"], {
    [styles["input-helper-text-state-error"]]: error,
    [styles["input-helper-text-state-disabled"]]: disabled
  });
  const iconContainerClass = classNames(styles["input-icon"], {
    [styles["input-icon-disabled"]]: disabled
  });
  const topLabel = labelStyle === InputLabelStyles.TOP_LABEL;
  const containedLabel = labelStyle === InputLabelStyles.CONTAINED_LABEL;

  return (
    <div className={className} style={{ width: width, minWidth: 300 }}>
      {topLabel && (
        <Label htmlFor={label} value={label} className={labelClass} />
      )}
      <div className={borderClass}>
        <div className={iconContainerClass}>{leadingIcon}</div>
        <div className={midPartClass}>
          {containedLabel && (
            <Label htmlFor={label} value={label} className={labelClass} />
          )}
          <div className={contentClass}>
            <div className={iconContainerClass}>{prefixIcon}</div>
            <Input
              onFocus={OnFocusHandler}
              onBlur={OnBlurHandler}
              label={label}
              disabled={disabled}
              {...rest}
            />
            <div className={iconContainerClass}>{suffixIcon}</div>
          </div>
        </div>
        <div className={iconContainerClass}>{trailingIcon}</div>
      </div>
      <div className={inputHelperText}>{helperText}</div>
    </div>
  );
};

export default TextInput;
