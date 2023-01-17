import styled from '@emotion/styled';

const StyledKeyPad = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(4, minmax(60px, 90px));
    grid-template-rows: repeat(5, 56px);
    gap: 16px;

    padding: 22px;

    & > *:nth-last-of-type(2) {
        grid-column: 1 / 3;
    }

    & > *:nth-last-of-type(1) {
        grid-column: 3 / 5;
    }

    background-color: ${({ theme }) => theme.color.background.toggle_keyPad};
    border-radius: ${({ theme }) => theme.borderRadius};

    @media only screen and (max-width: 400px) {
        gap: 12px;
        padding: 18px;
    }
`;

export { StyledKeyPad };
