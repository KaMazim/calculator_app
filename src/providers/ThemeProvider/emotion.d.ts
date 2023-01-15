import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        color: {
            background: {
                main: string;
                toggleKeyPad: string;
                screen: string;
            };

            key: {
                primary: {
                    background: string;
                    shadow: string;
                    text: string;
                };
                secondary: {
                    background: string;
                    shadow: string;
                    text: string;
                };
                default: {
                    background: string;
                    shadow: string;
                    text: string;
                };
            };

            text: {
                primary: string;
            };
        };

        transition: string;
    }
}
