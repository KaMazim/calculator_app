import React, { useEffect } from 'react';

import { useContext, useRef } from 'react';

import { ThemeContext } from '../../providers/ThemeProvider';

import { CircleWrapper, Circle, LabelWrapper, StyledSwitchTheme } from './switchTheme.styled';

const getShouldSum = (value: 0 | 1 | 2, prevShouldSum: boolean) =>
    value === 0 ? true : value === 2 ? false : prevShouldSum;

const SwitchTheme = () => {
    const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);

    const shouldSumRef = useRef<boolean>(getShouldSum(selectedTheme, false));

    useEffect(() => {
        const linkTag = document.querySelector("link[rel~='icon']");

        if (linkTag) {
            const linkTitle = linkTag.getAttribute('title') || '';
            const linkCurrentTheme = Number(linkTitle.split('-')[1]) - 1;

            if (linkCurrentTheme !== selectedTheme) {
                const newTheme = `theme-${selectedTheme + 1}`;

                linkTag.setAttribute('href', `/icons/${newTheme}.ico`);
                linkTag.setAttribute('title', newTheme);
            }
        }
    }, [selectedTheme]);

    return (
        <StyledSwitchTheme>
            <LabelWrapper>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </LabelWrapper>
            <CircleWrapper>
                <Circle
                    position={selectedTheme}
                    onClick={() => {
                        setSelectedTheme((prevSelectedTheme) => {
                            shouldSumRef.current = getShouldSum(
                                prevSelectedTheme,
                                shouldSumRef.current
                            );

                            if (shouldSumRef.current)
                                return (prevSelectedTheme + 1) as typeof prevSelectedTheme;
                            else return (prevSelectedTheme - 1) as typeof prevSelectedTheme;
                        });
                    }}
                />
            </CircleWrapper>
        </StyledSwitchTheme>
    );
};

export default SwitchTheme;
