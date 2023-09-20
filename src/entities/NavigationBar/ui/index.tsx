import {HTMLAttributes} from "react";

import { classNames } from "@/shares/lib/classNames";

import styles from './styles.module.scss';

interface NavigationBarProps extends HTMLAttributes<HTMLDivElement> {}

const NavigationBar = (props: NavigationBarProps) => {
    const { className, ...otherProps } = props;
    
    return (
        <nav className={classNames(styles.root, className)} {...otherProps}>
            <span>2</span>
            <span>2</span>
            <span>2</span>
            <span>2</span>
        </nav>
    );
};

export {NavigationBar, NavigationBarProps};