import React, { useState } from "react";
import { Textarea } from "../../atoms/InputFields/Textarea";
import styles from "./Textarea.scss";
import classNames from "classnames";
import { Label } from "../../atoms/Label";
import { LabelStyles, Variants } from "../../atoms/InputFields/types";

export interface TextareaInputProps
  extends React.HTMLProps<HTMLTextAreaElement> {
  id?: string;
  width?: number;
  labelStyle?: string;
  error?: boolean;
  label?: string;
  disabled?: boolean;
  className?: string;
  helperText?: string;
  resize?: boolean;
  variant?: string;
}
const TextareaInput: React.FC<TextareaInputProps> = (props) => {
  const {
    id,
    width,
    labelStyle,
    label = "",
    disabled,
    className,
    error,
    helperText,
    resize,
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
  const textareaClass = classNames(
    {
      [styles["textarea-focused"]]: isFocus,
      [styles["textarea-disabled"]]: disabled,
      [styles["textarea-error"]]: error,
      [styles["textarea-filled"]]: variant === Variants.FILLED,
      [styles["textarea-top"]]: labelStyle === LabelStyles.TOP_LABEL
    },
    className
  );

  const topLabel = labelStyle === LabelStyles.TOP_LABEL;
  const containedLabel = labelStyle === LabelStyles.CONTAINED_LABEL;
  return (
    <div className={textareaClass} style={{ width: width, minWidth: 300 }}>
      {topLabel && (
        <Label
          className={styles["textarea-label"]}
          htmlFor={id || label}
          value={label}
        />
      )}
      <div className={styles["textarea-border"]}>
        <div className={styles["textarea-border-mid-part"]}>
          {containedLabel && (
            <Label
              htmlFor={id || label}
              value={label}
              className={styles["textarea-label"]}
            />
          )}
          <Textarea
            resize={resize}
            id={id}
            disabled={disabled}
            label={label}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            {...rest}
          />
        </div>
      </div>
      <div className={styles["textarea-helper"]}>{helperText}</div>
    </div>
  );
};

export default TextareaInput;
