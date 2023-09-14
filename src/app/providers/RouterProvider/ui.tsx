import {Route, Routes} from "react-router-dom";
import {MainPage} from "@/pages/MainPage";

const RouterProvider = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
        </Routes>
    );
};

export {RouterProvider};