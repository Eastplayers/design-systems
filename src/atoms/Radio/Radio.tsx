import React from "react";
import styles from "./Radio.scss";
import ClassNames from "classnames";
import { RadioProps, RadioSizes } from "./types";

const Checkbox: React.FC<RadioProps> = (props) => {
  const {
    label,
    disabled,
    size = RadioSizes.NORMAL,
    inline = false,
    ...rest
  } = props;
  return (
    <label
      aria-label={label}
      className={ClassNames(styles.radio, {
        [styles.disabled]: disabled,
        [styles["radio--normal"]]: size === RadioSizes.NORMAL,
        [styles["radio--small"]]: size === RadioSizes.SMALL,
        [styles["radio--inline"]]: inline
      })}
    >
      <input
        disabled={disabled}
        type="radio"
        className={styles.radio__input}
        {...rest}
      />
      <span className={styles["radio__checkmark-container"]}>
        <span className={styles.radio__checkmark} />
      </span>
      {label}
    </label>
  );
};

export default Checkbox;
