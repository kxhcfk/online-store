import {lazy} from "react";

const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./index')), 500);
}))

export {MainPageAsync};