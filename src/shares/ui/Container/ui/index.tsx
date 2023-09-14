import {HTMLAttributes} from "react";

import { classNames } from "@/shares/lib/classNames";

import styles from './styles.module.scss';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container = (props: ContainerProps) => {
    const { className, children, ...otherProps } = props;
    
    return (
        <div className={classNames(styles.root, className)} {...otherProps}>
            {children}
        </div>
    );
};

export {Container, ContainerProps};