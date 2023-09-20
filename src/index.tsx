import {createRoot} from "react-dom/client";

import { App } from "./app";
import {StrictMode} from "react";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@/app/providers/ThemeProvider";

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
);