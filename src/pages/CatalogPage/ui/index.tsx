import {HTMLAttributes} from "react";

import { classNames } from "@/shares/lib/classNames";


interface CatalogPageProps extends HTMLAttributes<HTMLDivElement> {}

const CatalogPage = (props: CatalogPageProps) => {
    const { className, ...otherProps } = props;
    return (
        <div className={classNames(className)} {...otherProps}>
            Catalog Page
        </div>
    );
};

export default CatalogPage;