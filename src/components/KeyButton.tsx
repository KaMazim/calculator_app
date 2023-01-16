import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

type KeyButtonProps = { variant: keyof Theme['color']['key']; isText: boolean };

const KeyButton = styled.button<KeyButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    text-transform: uppercase;

    cursor: pointer;

    font-size: ${({ isText }) => (isText ? '22px' : '34px')};

    @media only screen and (max-width: 400px) {
        font-size: ${({ isText }) => (isText ? '18px' : '30px')};
    }

    width: 100%;

    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};

    //padding: 10px 20px;

    ${({
        theme: {
            color: { key },
        },
        variant,
    }) => css`
        color: ${key[variant].text};
        background-color: ${key[variant].background};
        border-bottom: 4px solid ${key[variant].shadow};

        &:hover,
        &:focus {
            background-color: ${key[variant].hoverBackground};
        }

        &:active {
            border-bottom: 0 solid ${key[variant].shadow};
        }
    `}

    transition: ${({ theme }) => theme.transition};
`;

export default KeyButton;
