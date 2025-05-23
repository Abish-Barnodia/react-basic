import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light');

    const lightTheme = () => {
        setThemeMode('light');
    };

    const darkTheme = () => {
        setThemeMode('dark');
    };

    return (
        <ThemeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default function useTheme() {
    return useContext(ThemeContext);
}
