import styled from '@emotion/styled';

const Screen = styled.main`
    width: 100%;
    height: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.color.background.screen};

    transition: ${({ theme }) => theme.transition};
`;

export default Screen;
