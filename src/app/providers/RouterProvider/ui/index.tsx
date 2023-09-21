import {Route, Routes} from "react-router-dom";
import {MainPage} from "@/pages/MainPage";
import {Suspense} from "react";
import {CatalogPage} from "@/pages/CatalogPage";
import {routeConfig} from "@/shares/config/router/routeConfig";

const RouterProvider = () => {
    return (
        <Suspense fallback="Loading...">
            <Routes>
                {Object.values(routeConfig).map(route => (
                    <Route key={route.path} path={route.path} element={route.element}/>
                ))}
            </Routes>
        </Suspense>
    );
};

export {RouterProvider};