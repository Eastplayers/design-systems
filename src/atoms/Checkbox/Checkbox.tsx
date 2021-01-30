import React from "react";
import styles from "./Checkbox.scss";
import ClassNames from "classnames";
import { CheckboxProps, CheckboxSizes } from "./types";

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    label,
    disabled,
    size = CheckboxSizes.NORMAL,
    inline = false,
    ...rest
  } = props;

  return (
    <label
      aria-label={label}
      className={ClassNames(styles.checkbox, {
        [styles.disabled]: disabled,
        [styles["checkbox--normal"]]: size === CheckboxSizes.NORMAL,
        [styles["checkbox--small"]]: size === CheckboxSizes.SMALL,
        [styles["checkbox--inline"]]: inline
      })}
    >
      <input
        disabled={disabled}
        type="checkbox"
        className={styles.checkbox__input}
        {...rest}
      />

      <span className={styles.checkbox__checkmark__container}>
        <span className={styles.checkbox__checkmark} />
      </span>
      {label}
    </label>
  );
};

export default Checkbox;
