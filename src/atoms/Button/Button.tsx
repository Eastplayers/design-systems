import React from "react";

enum ButtonTypes {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY",
    DISABLED = "DISABLED"
}

enum ButtonSizes {
    LARGE = "L",
    MEDIUM = "M",
    SMALL = "S",
    EXTRA_SMALL = "XS"
}

interface IButton {
    children: React.ReactNode | string;
    onClick: (e: React.MouseEvent) => void;
    type?: ButtonTypes;
    iconLeft?: string;
    iconRight?: string;
    size?: ButtonSizes;
    disabled?: boolean;
}

const Button: React.FC<IButton> = (props) => {
    return (
        <button disabled={props.disabled} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

Button.defaultProps = {
    children: "Button",
    type: ButtonTypes.PRIMARY,
    size: ButtonSizes.MEDIUM
};

export default Button;
