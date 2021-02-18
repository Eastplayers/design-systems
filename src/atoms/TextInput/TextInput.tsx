import React from "react";
import styles from "./TextInput.scss";
import classNames from "classnames";
export interface TextInputProps {
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
  onFocus?: () => void;
  onUnFocus?: () => void;
  style?: Record<string, unknown>;
  disabled?: boolean;
}
const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    paragraph,
    label,
    state,
    maxLength,
    placeholder,
    onChange,
    CountCharacter,
    onFocus,
    onUnFocus,
    style,
    disabled
  } = props;

  const placeholderText = classNames(styles["placeholder-text"], {
    [styles["disabled-text"]]: state === "disabled"
  });

  return (
    <>
      {!paragraph ? (
        <input
          id={label}
          disabled={disabled || state === "disabled"}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange && onChange(e);
            CountCharacter && CountCharacter(e);
          }}
          className={placeholderText}
          onClick={onFocus}
          onBlur={onUnFocus}
          style={style}
        />
      ) : (
        <textarea
          id={label}
          disabled={disabled || state === "disabled"}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            onChange && onChange(e);
            CountCharacter && CountCharacter(e);
          }}
          className={placeholderText}
          onClick={onFocus}
          onBlur={onUnFocus}
          style={style}
        />
      )}
    </>
  );
};

export default TextInput;
