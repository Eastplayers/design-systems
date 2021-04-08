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
    id,
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
  const textareaClass = classNames(
    {
      [styles["textarea-focused"]]: isFocus,
      [styles["textarea-disabled"]]: disabled,
      [styles["textarea-error"]]: error,
      [styles["textarea-filled"]]: filled
    },
    className
  );

  const inputBorder = classNames(styles["textarea-border"], {
    [styles["textarea-border-margin-top"]]:
      labelStyle === InputLabelStyles.TOP_LABEL
  });
  const inputHelperText = classNames(styles["textarea-helper"]);
  const topLabel = labelStyle === InputLabelStyles.TOP_LABEL;
  const containedLabel = labelStyle === InputLabelStyles.CONTAINED_LABEL;
  return (
    <div className={textareaClass} style={{ width: width, minWidth: 300 }}>
      {topLabel && (
        <Label
          className={styles["textarea-label"]}
          htmlFor={id || label}
          value={label}
        />
      )}
      <div className={inputBorder}>
        <div className={styles["textarea-border-mid-part"]}>
          {containedLabel && (
            <Label
              htmlFor={id || label}
              value={label}
              className={styles["textarea-label"]}
            />
          )}
          <Textarea
            id={id}
            disabled={disabled}
            label={label}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            {...rest}
          />
        </div>
      </div>
      <div className={inputHelperText}>{helperText}</div>
    </div>
  );
};

export default TextareaInput;
