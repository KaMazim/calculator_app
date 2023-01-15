import { ThemeProvider as EmotionThemeProvider, Theme } from '@emotion/react';

import { useState, createContext } from 'react';

import colorThemes from './colorThemes';

type themeContext = {
    currentTheme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<0 | 1 | 2>>;
};

const ThemeContext = createContext({} as themeContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<0 | 1 | 2>(0);

    const currentTheme: Theme = {
        color: colorThemes[theme],
        transition: 'all 0.3s',
        borderRadius: '8px',
    };

    return (
        <ThemeContext.Provider value={{ currentTheme, setTheme }}>
            <EmotionThemeProvider theme={currentTheme}>{children}</EmotionThemeProvider>
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };
