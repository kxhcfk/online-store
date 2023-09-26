import {HTMLAttributes} from "react";

import { classNames } from "@/shares/lib/classNames";

import styles from "./styles.module.scss";

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {}

const Loader = (props: LoaderProps) => {
    const { className, ...otherProps } = props;
    return (
        <div
            className={classNames(styles.root, className)}
            {...otherProps}
        />
    );
};

export {Loader, LoaderProps};