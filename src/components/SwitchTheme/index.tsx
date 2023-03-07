import React, { useEffect, useRef } from 'react';
import { colorThemeSlice } from '../../app/colorThemeSlice';
import { useAppDispatch, useAppSelector } from '../../app/store';

import { CircleWrapper, Circle, LabelWrapper, StyledSwitchTheme } from './SwitchTheme.styled';

const SwitchTheme = () => {
    const { currentTheme, colorThemes } = useAppSelector((state) => state.colorTheme);

    const { setCurrentTheme } = colorThemeSlice.actions;
    const dispatch = useAppDispatch();

    const shouldSumRef = useRef<boolean>(currentTheme > 0 ? false : true);

    useEffect(() => {
        const lastIndex = colorThemes.length - 1;

        if (currentTheme === 0) shouldSumRef.current = true;
        else if (currentTheme === lastIndex) shouldSumRef.current = false;
    }, [currentTheme, colorThemes]);

    return (
        <StyledSwitchTheme>
            <LabelWrapper>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </LabelWrapper>
            <CircleWrapper>
                <Circle
                    position={currentTheme}
                    onClick={() => {
                        const newTheme = shouldSumRef.current ? currentTheme + 1 : currentTheme - 1;
                        dispatch(setCurrentTheme(newTheme));
                    }}
                />
            </CircleWrapper>
        </StyledSwitchTheme>
    );
};

export default SwitchTheme;
