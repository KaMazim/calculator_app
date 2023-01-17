import styled from '@emotion/styled';

const switchWidth = 70;
const switchPadding = 5;

const switchInnerWidth = switchWidth - switchPadding * 2;

const circleWidth = 16;
const switchAvailableWidth = switchInnerWidth - circleWidth;

const CircleWrapper = styled.div`
    display: flex;

    background-color: ${({ theme }) => theme.color.background.toggle_keyPad};

    width: 100%;
    padding: ${switchPadding}px;

    border-radius: 13px;
`;

const Circle = styled.button<{ position: 0 | 1 | 2 }>`
    width: ${circleWidth}px;
    height: ${circleWidth}px;
    border-radius: 100%;

    border: none;
    outline: none;

    cursor: pointer;

    background-color: ${({ theme }) => theme.color.key.primary.background};

    &:hover,
    &:focus {
        background-color: ${({ theme }) => theme.color.key.primary.hoverBackground};
    }

    margin-left: ${({ position }) => (switchAvailableWidth / 2) * position}px;

    transition: ${({ theme }) => theme.transition};
`;

const LabelWrapper = styled.div`
    width: ${switchWidth}px;
    padding: ${switchPadding}px;

    display: flex;
    justify-content: space-between;

    font-size: 12px;

    width: 100%;

    & > span {
        flex-basis: 16px;
        text-align: center;
    }
`;

const StyledSwitchTheme = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: ${switchWidth}px;
`;

export { CircleWrapper, Circle, LabelWrapper, StyledSwitchTheme };
