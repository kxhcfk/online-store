import {lazy} from "react";

const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import("./index")), 1500);
}));

export {MainPageAsync};