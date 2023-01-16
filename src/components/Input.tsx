import styled from '@emotion/styled';

const Input = styled.div`
    color: ${({ theme }) => theme.color.text.primary};
    background-color: ${({ theme }) => theme.color.background.input};

    width: 100%;
    max-width: 540px;
    height: 128px;

    padding-inline: 32px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    font-size: 56px;

    border-radius: ${({ theme }) => theme.borderRadius};

    margin-bottom: 24px;
`;

export default Input;
