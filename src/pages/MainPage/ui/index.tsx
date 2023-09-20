import {HTMLAttributes} from "react";

import { classNames } from "@/shares/lib/classNames";

interface MainPageProps extends HTMLAttributes<HTMLDivElement> {}

const MainPage = (props: MainPageProps) => {
    const { className, ...otherProps } = props;
    return (
        <div className={classNames(className)} {...otherProps}>
            Main Page
        </div>
    );
};

export default MainPage;