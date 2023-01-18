import styled from 'styled-components';

const StyledCalculator = styled.main`
    width: 100%;
    max-width: 452px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    & > *:first-child {
        margin-bottom: 8px;
    }
`;

export { StyledCalculator };
