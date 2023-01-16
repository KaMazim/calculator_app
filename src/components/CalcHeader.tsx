import styled from '@emotion/styled';
import SwitchTheme from './SwitchTheme';

const StyledCalcHeader = styled.header`
    width: 100%;
    max-width: 540px;

    display: flex;
    align-items: flex-end;

    margin-bottom: 32px;
`;

const TextWrapper = styled.div`
    flex-grow: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-right: 26px;

    height: 26px;

    h1 {
        font-size: 32px;
        text-transform: lowercase;

        margin: 0;
    }

    & > span {
        text-transform: uppercase;
        font-size: 12px;
    }
`;

const CalcHeader = () => {
    return (
        <StyledCalcHeader>
            <TextWrapper>
                <h1>calc</h1>
                <span>theme</span>
            </TextWrapper>

            <SwitchTheme />
        </StyledCalcHeader>
    );
};

export default CalcHeader;
