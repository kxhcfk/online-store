import "./styles/index.scss";
import {MainPage} from "../pages/MainPage";
import {Suspense} from "react";

const App = () => {
    return (
        <Suspense fallback="Loading...">
            <MainPage/>
        </Suspense>
    )
}

export {App};