import {lazy} from "react";

const CatalogPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./index')), 1500);
}))

export {CatalogPageAsync};