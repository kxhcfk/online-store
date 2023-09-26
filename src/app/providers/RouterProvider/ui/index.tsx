import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {routeConfig } from "@/shares/config/router/routeConfig";
import {PageLoader} from "@/widgets/PageLoader";

const RouterProvider = () => {
    return (
        <Suspense fallback={<PageLoader />}>
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