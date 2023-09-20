import {createContext, Dispatch, SetStateAction} from "react";
import {Theme} from "@/app/types/theme";

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>(null);

export const LOCALE_STORAGE_THEME_KEY = "theme";