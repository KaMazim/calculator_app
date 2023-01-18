import 'styled-components';
declare module 'styled-components' {
    export interface Theme {
        color: {
            background: {
                input: string;
                toggle_keyPad: string;
                screen: string;
            };

            key: {
                primary: {
                    background: string;
                    hoverBackground: string;
                    shadow: string;
                    text: string;
                };
                secondary: {
                    background: string;
                    hoverBackground: string;
                    shadow: string;
                    text: string;
                };
                default: {
                    background: string;
                    hoverBackground: string;
                    shadow: string;
                    text: string;
                };
            };

            text: {
                primary: string;
            };
        };

        transition: string;

        borderRadius: string;
    }
}
