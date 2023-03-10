import styled from 'styled-components';

const Screen = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 32px 24px;

    color: ${({ theme }) => theme.color.text.primary};
    background-color: ${({ theme }) => theme.color.background.screen};

    &,
    & > * {
        transition: ${({ theme }) => theme.transition};
    }
`;

export default Screen;
