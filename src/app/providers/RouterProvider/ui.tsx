import {Route, Routes} from "react-router-dom";
import {MainPage} from "@/pages/MainPage";
import {Suspense} from "react";

const RouterProvider = () => {
    return (
        <Suspense fallback="Loading...">
            <Routes>
                
                <Route path={"/"} element={<MainPage/>}/>
            </Routes>
        </Suspense>
    );
};

export {RouterProvider};