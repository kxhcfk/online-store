import {lazy} from "react";

const CatalogPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./index')), 500);
}))

export {CatalogPageAsync};