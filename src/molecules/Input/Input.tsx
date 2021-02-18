import React, { useState } from "react";
import styles from "./Input.scss";
import classNames from "classnames";
import { InputPositions, InputStates, InputStyles, InputTypes } from "./types";
import { Icon } from "../../atoms/Icon";
import MidPart from "./Input Component/MidPart";

export interface InputProps {
  style?: string;
  type?: string | undefined;
  position?: string;
  helper?: string;
  state?: string;
  label?: string;
  children?: string;
  iconColor?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void | undefined;
  maxLength?: number;
  paragraph?: boolean;
  placeholder?: string;
}
const Input: React.FC<InputProps> = (props) => {
  const {
    style = InputStyles.NO_LABEL,
    label = "Label",
    position = InputPositions.PREFIX,
    helper = "Helper Text",
    iconColor,
    prefixIcon = "trash",
    suffixIcon = "trash",
    type,
    onChange,
    maxLength,
    paragraph,
    placeholder,
    state = InputStates.DEFAULT
  } = props;

  const [count, setCount] = useState<number>(0);
  const CountCharacter = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCount(e.target.value.length);
  };

  const [focus, setFocus] = useState<boolean>(false);
  const onFocus = () => {
    setFocus(true);
  };
  const onUnFocus = () => {
    setFocus(false);
  };

  const topLabel = classNames(styles["input-label"], {
    [styles["disabled-text"]]: state === "disabled",
    [styles["top-label"]]: style === InputStyles.TOP_LABEL
  });

  const inputBorder = classNames(styles["input-border"], {
    [styles["disabled-container"]]: state === "disabled",
    [styles["input-border-focus"]]: focus === true,
    [styles["input-border-error"]]: state === "error",
    [styles["leading"]]: !paragraph && type === InputTypes.LEADING,
    [styles["trailing"]]: !paragraph && type === InputTypes.TRAILING,
    [styles["both-type"]]: !paragraph && type === InputTypes.BOTH
  });

  const helperText = classNames({
    [styles["helper-text"]]: helper !== "",
    [styles["disabled-text"]]: state === "disabled",
    [styles["error-text"]]: state === "error"
  });

  const characterCount = classNames(styles["character-count"], {
    [styles["show-character-count"]]: state !== "disabled" && maxLength
  });

  const leadingIconContainer = classNames(
    styles["input-icon"],
    styles["leading-icon-container"],
    { [styles["input-icon-disabled"]]: state === "disabled" }
  );

  const trailingIconContainer = classNames(
    styles["input-icon"],
    styles["trailing-icon-container"],
    { [styles["input-icon-disabled"]]: state === "disabled" }
  );

  return (
    <div className={styles["input"]}>
      <label htmlFor={label} className={topLabel}>
        {label}
      </label>
      <div className={inputBorder}>
        <div className={leadingIconContainer}>
          <Icon
            icon={prefixIcon}
            size={22}
            color={state === "disabled" ? styles.disabledColor : iconColor}
          />
        </div>
        <div className={styles["mid-part"]}>
          <MidPart
            style={style}
            position={position}
            prefixIcon={prefixIcon}
            suffixIcon={suffixIcon}
            iconColor={iconColor}
            paragraph={paragraph}
            label={label}
            state={state}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={onChange}
            CountCharacter={CountCharacter}
            onFocus={onFocus}
            onUnFocus={onUnFocus}
          />
        </div>
        <div className={trailingIconContainer}>
          <Icon
            icon={suffixIcon}
            size={22}
            color={state === "disabled" ? styles.disabledColor : iconColor}
          />
        </div>
      </div>
      <div className={styles["input-footer"]}>
        <div className={helperText}>{helper}</div>
        <div className={characterCount}>
          {count}/{maxLength}
        </div>
      </div>
    </div>
  );
};

export default Input;
