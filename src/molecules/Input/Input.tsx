import React, { ReactNode, useState } from "react";
import { Text } from "../../atoms";
import styles from "./Input.scss";
import classNames from "classnames";
import { InputPositions, InputStyles, InputTypes } from "./types";
import { Icon } from "../../atoms/Icon";

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
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void | undefined;
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
    placeholder
  } = props;

  const topLabel = classNames(styles["input-label"], {
    [styles["top-label"]]: style === InputStyles.TOP_LABEL
  });

  const containedLabel = classNames(styles["input-label"], {
    [styles["contained-label"]]: style === InputStyles.CONTAINED_LABEL
  });

  const contentContainer = paragraph
    ? styles["content-container"]
    : classNames(styles["content-container"], {
        [styles["prefix"]]: position === InputPositions.PREFIX,
        [styles["suffix"]]: position === InputPositions.SUFFIX,
        [styles["both-position"]]: position === InputPositions.BOTH
      });

  const inputBorder = paragraph
    ? styles["input-border"]
    : classNames(styles["input-border"], {
        [styles["leading"]]: type === InputTypes.LEADING,
        [styles["trailing"]]: type === InputTypes.TRAILING,
        [styles["both-type"]]: type === InputTypes.BOTH
      });

  const placeholderText = classNames(styles["placeholder-text"], {
    [styles["paragraph"]]: paragraph === true
  });

  const helperText = classNames({
    [styles["helper-text"]]: helper !== ""
  });

  const characterCount = classNames(styles["character-count"]);

  const prefixIconContainer = classNames(
    styles["input-icon"],
    styles["prefix-icon-container"]
  );

  const suffixIconContainer = classNames(
    styles["input-icon"],
    styles["suffix-icon-container"]
  );

  const leadingIconContainer = classNames(
    styles["input-icon"],
    styles["leading-icon-container"]
  );

  const trailingIconContainer = classNames(
    styles["input-icon"],
    styles["trailing-icon-container"]
  );
  const [count, setCount] = useState<number>(0);
  const CountCharacter = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.target.value.length);
  };

  return (
    <div className={styles["input"]}>
      <div className={topLabel}>{label}</div>
      <div className={inputBorder}>
        <div className={leadingIconContainer}>
          <Icon icon={prefixIcon} size={22} color={iconColor} />
        </div>
        <div className={styles["mid-part"]}>
          <div className={containedLabel}>{label}</div>
          <div className={contentContainer}>
            <div className={prefixIconContainer}>
              <Icon icon={prefixIcon} size={22} color={iconColor} />
            </div>
            <textarea
              maxLength={maxLength}
              placeholder={placeholder}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                onChange ? onChange(e) : null;
                CountCharacter(e);
              }}
              className={placeholderText}
            />
            <div className={suffixIconContainer}>
              <Icon icon={suffixIcon} size={22} color={iconColor} />
            </div>
          </div>
        </div>
        <div className={trailingIconContainer}>
          <Icon icon={suffixIcon} size={22} color={iconColor} />
        </div>
      </div>
      <div className={styles["footer"]}>
        <div className={helperText}>{helper}</div>
        {maxLength ? (
          <div className={characterCount}>
            {count}/{maxLength}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
