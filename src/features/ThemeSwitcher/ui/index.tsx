import React, {ButtonHTMLAttributes, useCallback} from "react";

import {classNames} from "@/shares/lib/classNames";

import styles from "./styles.module.scss";
import {useTheme} from "@/shares/theme";

import DarkIcon from "@/icons/darkMode.svg";
import LightIcon from "@/icons/lightMode.svg";
import {Button, ButtonTheme} from "@/shares/ui/Button";

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    readonly theme?: ButtonTheme;
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {className, onClick, ...otherProps} = props;
    
    const {theme, toggleTheme} = useTheme();
    
    const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        toggleTheme();
        onClick?.(e);
    }, [theme]);
    
    return (
        <Button
            className={classNames(styles.root, className)}
            onClick={handleClick}
            {...otherProps}
        >
            {theme === "light" ? (
                <LightIcon className={styles.icon} />
            ) : (
                <DarkIcon className={styles.icon} />
            )}
        </Button>
    );
};

export {ThemeSwitcher, ThemeSwitcherProps};