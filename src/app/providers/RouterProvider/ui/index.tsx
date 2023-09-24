import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {routeConfig } from "@/shares/config/router/routeConfig";

const RouterProvider = () => {
    return (
        <Suspense fallback="Loading...">
            <Routes>
                {Object.values(routeConfig).map(route => (
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export {RouterProvider};