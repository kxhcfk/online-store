import {ButtonHTMLAttributes, memo} from "react";

import {classNames} from "@/shares/lib/classNames";

import styles from "./styles.module.scss";

type ButtonTheme = "clear";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    readonly theme?: ButtonTheme;
}

const Button = memo((props: ButtonProps) => {
    const {
        className,
        theme = "clear",
        children,
        ...otherProps
    } = props;
    
    return (
        <button
            className={classNames(styles.root, className, theme)}
            {...otherProps}
        >
            {children}
        </button>
    );
});

export {Button, ButtonProps, ButtonTheme};