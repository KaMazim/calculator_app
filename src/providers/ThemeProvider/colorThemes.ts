import { Theme } from '@emotion/react';

type colorTheme = Theme['color'];

const colorThemes: colorTheme[] = [
    {
        background: {
            main: 'hsl(222, 26%, 31%)',
            toggleKeyPad: 'hsl(223, 31%, 20%)',
            screen: 'hsl(224, 36%, 15%)',
        },

        key: {
            primary: {
                // Also used in toggle button
                background: 'hsl(6, 63%, 50%)',
                hoverBackground: 'hsl(6, 63%, 70%)',
                shadow: 'hsl(6, 70%, 34%)',
                text: 'hsl(0, 0%, 100%)',
            },
            secondary: {
                background: 'hsl(225, 21%, 49%)',
                hoverBackground: 'hsl(225, 21%, 69%)',
                shadow: 'hsl(224, 28%, 35%)',
                text: 'hsl(0, 0%, 100%)',
            },
            default: {
                background: 'hsl(30, 25%, 89%)',
                hoverBackground: 'hsl(30, 25%, 100%)',
                shadow: 'hsl(28, 16%, 65%)',
                text: 'hsl(221, 14%, 31%)',
            },
        },

        text: {
            primary: 'hsl(0, 0%, 100%)',
        },
    },
    {
        background: {
            main: 'hsl(0, 0%, 90%)',
            toggleKeyPad: 'hsl(0, 5%, 81%)',
            screen: 'hsl(0, 0%, 93%)',
        },

        key: {
            primary: {
                // Also used in toggle button
                background: 'hsl(25, 98%, 40%)',
                hoverBackground: 'hsl(25, 98%, 60%)',
                shadow: 'hsl(25, 99%, 27%)',
                text: 'hsl(0, 0%, 100%)',
            },
            secondary: {
                background: 'hsl(185, 42%, 37%)',
                hoverBackground: 'hsl(185, 42%, 57%)',
                shadow: 'hsl(185, 58%, 25%)',
                text: 'hsl(0, 0%, 100%)',
            },
            default: {
                background: 'hsl(45, 7%, 89%)',
                hoverBackground: 'hsl(45, 7%, 100%)',
                shadow: 'hsl(35, 11%, 61%)',
                text: 'hsl(60, 10%, 19%)',
            },
        },

        text: {
            primary: 'hsl(60, 10%, 19%)',
        },
    },
    {
        background: {
            main: 'hsl(268, 75%, 9%)',
            toggleKeyPad: 'hsl(268, 71%, 12%)',
            screen: 'hsl(268, 71%, 12%)',
        },

        key: {
            primary: {
                // Also used in toggle button
                background: 'hsl(176, 100%, 44%)',
                hoverBackground: 'hsl(176, 100%, 84%)',
                shadow: 'hsl(177, 92%, 70%)',
                text: 'hsl(198, 20%, 13%)',
            },
            secondary: {
                background: 'hsl(281, 89%, 26%)',
                hoverBackground: 'hsl(281, 89%, 46%)',
                shadow: 'hsl(285, 91%, 52%)',
                text: 'hsl(0, 0%, 100%)',
            },
            default: {
                background: 'hsl(268, 47%, 21%)',
                hoverBackground: 'hsl(268, 47%, 41%)',
                shadow: 'hsl(290, 70%, 36%)',
                text: 'hsl(52, 100%, 62%)',
            },
        },

        text: {
            primary: 'hsl(52, 100%, 62%)',
        },
    },
];

export default colorThemes;
