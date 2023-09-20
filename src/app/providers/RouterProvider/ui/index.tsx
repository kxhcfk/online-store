import {Route, Routes} from "react-router-dom";
import {MainPage} from "@/pages/MainPage";
import {Suspense} from "react";
import {CatalogPage} from "@/pages/CatalogPage";

const RouterProvider = () => {
    return (
        <Suspense fallback="Loading...">
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/catalog"} element={<CatalogPage/>}/>
            </Routes>
        </Suspense>
    );
};

export {RouterProvider};