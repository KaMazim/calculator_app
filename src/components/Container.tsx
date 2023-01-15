import { useContext } from 'react';

import styled from '@emotion/styled';

import { ThemeContext } from '../providers/ThemeProvider';

import KeyButton from './KeyButton';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    padding: 20px;

    background-color: ${({ theme }) => theme.color.background.main};
`;

const Container = () => {
    const { setTheme } = useContext(ThemeContext);
    return (
        <StyledContainer>
            {[0, 1, 2].map((value) => (
                <KeyButton
                    variant='default'
                    onClick={() => {
                        setTheme(value as 0 | 1 | 2);
                    }}
                >
                    {value + 1}
                </KeyButton>
            ))}
        </StyledContainer>
    );
};

export default Container;
