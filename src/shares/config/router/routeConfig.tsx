import {RouteProps} from "react-router-dom";
import {MainPage} from "@/pages/MainPage";
import {CatalogPage} from "@/pages/CatalogPage";
import {NotFoundPage} from "@/pages/NotFoundPage";

export enum AppRoutes {
    MAIN = "main",
    CATALOG = "catalog",
    NOT_FOUND = "not_found",
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.CATALOG]: "/catalog",
    [AppRoutes.NOT_FOUND]: "*",
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
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.not_found,
        element: <NotFoundPage/>
    }
};