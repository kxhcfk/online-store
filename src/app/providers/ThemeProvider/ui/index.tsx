import {ReactNode, useMemo, useState} from "react";
import {Theme} from "@/shares/types/theme";
import {LOCALE_STORAGE_THEME_KEY, ThemeContext} from "@/shares/theme";

interface ThemeProviderProps  {
    readonly children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const {children} = props;
    
    const [theme, setTheme] = useState<Theme>((localStorage.getItem(LOCALE_STORAGE_THEME_KEY) as Theme) || "light");
    
    const defaultValue = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);
    
    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeProvider, ThemeProviderProps};