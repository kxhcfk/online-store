import {useCallback, useContext} from "react";
import {LOCALE_STORAGE_THEME_KEY, ThemeContext} from "./context";

export const useTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    
    const toggleTheme = useCallback(() => {
        setTheme(prevState => {
            const newTheme = prevState === "light" ? "dark" : "light";
            
            localStorage.setItem(LOCALE_STORAGE_THEME_KEY, newTheme);
            
            return newTheme;
        });
    }, [theme]);
    
    return {
        theme,
        toggleTheme,
    };
};