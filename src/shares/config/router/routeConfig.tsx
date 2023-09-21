import {RouteProps} from "react-router-dom";
import {MainPage} from "@/pages/MainPage";
import {CatalogPage} from "@/pages/CatalogPage";

export enum AppRoutes {
    MAIN = "main",
    CATALOG = "catalog",
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.CATALOG]: "/catalog",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage/>,
    },
    [AppRoutes.CATALOG]: {
        path: RoutePaths.catalog,
        element: <CatalogPage/>,
    },
};