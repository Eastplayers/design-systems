import React from "react";
import styles from "../Input.scss";
import classNames from "classnames";
import TextInput from "../../../atoms/TextInput/TextInput";
import { Icon } from "../../../atoms/Icon";
import { InputPositions, InputStyles } from "../types";
export interface MidPartProps {
  style?: string;
  position?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  paragraph?: boolean;
  label: string;
  state?: string;
  maxLength?: number;
  placeholder?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void | undefined;
  CountCharacter?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void | undefined;
  onFocus: () => void;
  onUnFocus: () => void;
  iconColor?: string;
}
const MidPart: React.FC<MidPartProps> = (props) => {
  const {
    style,
    position,
    prefixIcon = "trash",
    suffixIcon = "trash",
    iconColor,
    paragraph,
    label,
    state,
    maxLength,
    placeholder,
    onChange,
    CountCharacter,
    onFocus,
    onUnFocus
  } = props;

  const containedLabel = classNames(styles["input-label"], {
    [styles["disabled-text"]]: state === "disabled",
    [styles["contained-label"]]: style === InputStyles.CONTAINED_LABEL
  });

  const contentContainer = classNames(
    styles["content-container"],
    !paragraph && {
      [styles["prefix"]]: position === InputPositions.PREFIX,
      [styles["suffix"]]: position === InputPositions.SUFFIX,
      [styles["both-position"]]: position === InputPositions.BOTH
    }
  );

  const prefixIconContainer = classNames(
    styles["input-icon"],
    styles["prefix-icon-container"],
    { [styles["input-icon-disabled"]]: state === "disabled" }
  );

  const suffixIconContainer = classNames(
    styles["input-icon"],
    styles["suffix-icon-container"],
    { [styles["input-icon-disabled"]]: state === "disabled" }
  );

  return (
    <div>
      <label htmlFor={label} className={containedLabel}>
        {label}
      </label>
      <div className={contentContainer}>
        <div className={prefixIconContainer}>
          <Icon
            icon={prefixIcon}
            size={22}
            color={state === "disabled" ? styles.disabledColor : iconColor}
          />
        </div>
        <TextInput
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
        <div className={suffixIconContainer}>
          <Icon
            icon={suffixIcon}
            size={22}
            color={state === "disabled" ? styles.disabledColor : iconColor}
          />
        </div>
      </div>
    </div>
  );
};
export default MidPart;
