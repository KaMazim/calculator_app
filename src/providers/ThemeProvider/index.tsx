import React from 'react';

import { ThemeProvider as StyledThemeProvider, Theme } from 'styled-components';

import { useState, createContext } from 'react';

import colorThemes from './colorThemes';

type themeContext = {
    currentTheme: Theme;
    selectedTheme: 0 | 1 | 2;
    setSelectedTheme: React.Dispatch<React.SetStateAction<0 | 1 | 2>>;
};

const ThemeContext = createContext({} as themeContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedTheme, setSelectedTheme] = useState<0 | 1 | 2>(0);

    const currentTheme: Theme = {
        color: colorThemes[selectedTheme],
        transition: 'all 0.3s',
        borderRadius: '10px',
    };

    return (
        <ThemeContext.Provider value={{ currentTheme, selectedTheme, setSelectedTheme }}>
            <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };
