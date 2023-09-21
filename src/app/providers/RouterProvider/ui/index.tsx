import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
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