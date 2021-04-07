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

  const inputBorder = classNames(styles["textarea-border"], {
    [styles["textarea-border-margin-top"]]:
      labelStyle === InputLabelStyles.TOP_LABEL,
    [styles["textarea-border-state-filled"]]: filled,
    [styles["textarea-border-state-disabled"]]: disabled,
    [styles["textarea-border-state-focus"]]: isFocus,
    [styles["textarea-border-state-error"]]: !disabled && error
  });
  const inputLabel = classNames({
    [styles["textarea-label-state-disabled"]]: disabled,
    [styles["textarea-label-state-error"]]: !disabled && error
  });
  const inputHelperText = classNames(styles["textarea-helper-text"], {
    [styles["textarea-helper-text-state-error"]]: error,
    [styles["textarea-helper-text-state-disabled"]]: disabled
  });
  const topLabel = labelStyle === InputLabelStyles.TOP_LABEL;
  const containedLabel = labelStyle === InputLabelStyles.CONTAINED_LABEL;
  return (
    <div className={className} style={{ width: width, minWidth: 300 }}>
      {topLabel && (
        <Label htmlFor={label} value={label} className={inputLabel} />
      )}
      <div className={inputBorder}>
        <div className={styles["textarea-border-mid-part"]}>
          {containedLabel && (
            <Label htmlFor={label} value={label} className={inputLabel} />
          )}
          <div className={styles["textarea-border-mid-part-content"]}>
            <Textarea
              disabled={disabled}
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
