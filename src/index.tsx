import {createRoot} from "react-dom/client";

import { App } from "./app";
import {StrictMode} from "react";
import {BrowserRouter} from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);