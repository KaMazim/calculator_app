import React, { useEffect } from 'react';

import {
    ThemeProvider as StyledThemeProvider,
    type Theme
} from 'styled-components';

import { useAppSelector } from '../../app/store';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const { colorThemes, currentTheme } = useAppSelector(
        (state) => state.colorTheme
    );

    const theme: Theme = {
        color: colorThemes[currentTheme],
        transition: 'all 0.3s',
        borderRadius: '10px'
    };

    // Setting icon
    useEffect(() => {
        const linkTag = document.querySelector("link[rel~='icon']");

        if (linkTag !== null) {
            const linkTitle = linkTag.getAttribute('title') ?? '';
            const linkCurrentTheme = Number(linkTitle.split('-')[1]) - 1;

            if (linkCurrentTheme !== currentTheme) {
                const newTheme = `theme-${currentTheme + 1}`;

                linkTag.setAttribute('href', `/icons/${newTheme}.ico`);
                linkTag.setAttribute('title', newTheme);
            }
        }
    }, [currentTheme]);

    return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export { ThemeProvider };
