import styled from '@emotion/styled';

const Input = styled.input`
    color: ${({ theme }) => theme.color.text.primary};
    background-color: ${({ theme }) => theme.color.background.input};

    width: 100%;
    min-height: 97px;
    padding: 28px 32px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    text-align: right;

    outline: none;

    font-size: 36px;

    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};

    transition: ${({ theme }) => theme.transition};
`;

export default Input;
