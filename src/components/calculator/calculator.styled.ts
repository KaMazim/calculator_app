import styled from '@emotion/styled';

const StyledCalculator = styled.main`
    width: 100%;
    max-width: 452px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    & > *:first-of-type {
        margin-bottom: 8px;
    }
`;

export { StyledCalculator };
