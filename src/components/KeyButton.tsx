import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

const KeyButton = styled.button<{ variant: keyof Theme['color']['key'] }>`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;

    cursor: pointer;

    font-size: 32px;

    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};

    padding: 10px 20px;

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

    position: relative;
`;

export default KeyButton;
