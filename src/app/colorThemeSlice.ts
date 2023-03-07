import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Theme } from 'styled-components';

type colorTheme = Theme['color'];

const colorThemes: colorTheme[] = [
    {
        background: {
            input: '#181F33',
            toggle_keyPad: '#242D44',
            screen: '#3A4663',
        },

        key: {
            primary: {
                // Also used in toggle button
                background: '#D03F2F',
                hoverBackground: '#F96B5B',
                shadow: '#93261A',
                text: '#FFFFFF',
            },
            secondary: {
                background: '#647198',
                hoverBackground: '#A2B2E1',
                shadow: '#414E73',
                text: '#FFFFFF',
            },
            default: {
                background: '#EAE3DC',
                hoverBackground: '#FFFFFE',
                shadow: '#B3A497',
                text: '#434A59',
            },
        },

        text: {
            primary: '#FFFFFF',
        },
    },
    {
        background: {
            input: '#FFFFFF',
            toggle_keyPad: '#979797',
            screen: '#E6E6E6',
        },

        key: {
            primary: {
                // Also used in toggle button
                background: '#C85402',
                hoverBackground: '#FF8A38',
                shadow: '#873901',
                text: '#FFFFFF',
            },
            secondary: {
                background: '#378187',
                hoverBackground: '#62B5BC',
                shadow: '#1B6066',
                text: '#FFFFFF',
            },
            default: {
                background: '#E5E4E1',
                hoverBackground: '#FFFFFF',
                shadow: '#A79E91',
                text: '#36362C',
            },
        },

        text: {
            primary: '#36362C',
        },
    },
    {
        background: {
            input: '#1E0936',
            toggle_keyPad: '#1E0936',
            screen: '#17062A',
        },

        key: {
            primary: {
                // Also used in toggle button
                background: '#00DED0',
                hoverBackground: '#93FFF8',
                shadow: '#6CF9F1',
                text: '#1A2327',
            },
            secondary: {
                background: '#56077C',
                hoverBackground: '#8631AF',
                shadow: '#BE15F4',
                text: '#FFFFFF',
            },
            default: {
                background: '#331C4D',
                hoverBackground: '#6C34AC',
                shadow: '#881C9E',
                text: '#FFE53D',
            },
        },

        text: {
            primary: '#FFE53D',
        },
    },
];

const currentTheme = 0;

const initialState = {
    currentTheme,
    colorThemes,
};

export default colorThemes;

export const colorThemeSlice = createSlice({
    name: 'colorTheme',
    initialState,
    reducers: {
        setCurrentTheme: (state, action: PayloadAction<typeof initialState.currentTheme>) => {
            const newTheme = action.payload;

            if (newTheme >= 0 && newTheme < state.colorThemes.length) state.currentTheme = newTheme;
        },
    },
});
