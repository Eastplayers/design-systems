import React from "react";
import styles from "./Checkbox.scss";
import ClassNames from "classnames";

interface CheckboxProps {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  small?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { label, disabled, onChange } = props;
  return (
    <label
      className={ClassNames(styles.checkbox, {
        [styles.disabled]: disabled
      })}
    >
      {label}
      <input
        disabled={disabled}
        type="checkbox"
        className={styles.checkbox__input}
        onChange={onChange}
      />
      <span className={styles.checkbox__checkmark__container}>
        <span className={styles.checkbox__checkmark} />
      </span>
    </label>
  );
};

Checkbox.defaultProps = {};

export default Checkbox;
