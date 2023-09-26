import {HTMLAttributes} from "react";

import { classNames } from "@/shares/lib/classNames";

import styles from "./styles.module.scss";

interface PageLoaderProps extends HTMLAttributes<HTMLDivElement> {}

const PageLoader = (props: PageLoaderProps) => {
    const { className, ...otherProps } = props;
    return (
        <div
            className={classNames(styles.root, className)}
            {...otherProps}
        >
            <div className={styles.loader} />
        </div>
    );
};

export {PageLoader, PageLoaderProps};