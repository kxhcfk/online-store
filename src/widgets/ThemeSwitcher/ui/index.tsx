import {ButtonHTMLAttributes} from "react";

import { classNames } from "@/shares/lib/classNames";

import styles from './styles.module.scss';

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { className, ...otherProps } = props;
    return (
        <button className={classNames(styles.root, className)} {...otherProps}>
        
        </button>
    );
};

export {ThemeSwitcher, ThemeSwitcherProps};