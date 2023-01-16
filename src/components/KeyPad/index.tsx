import styled from '@emotion/styled';

import KeyButton from '../KeyButton';

import { divisionSign, dotSign, equalSign, minusSign, multiplySign, plusSign } from './mathSigns';

const StyledKeyPad = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(60px, 101px));
    grid-template-rows: repeat(5, 64px);
    gap: 24px;

    padding: 32px;

    & > *:nth-last-of-type(2) {
        grid-column: 1 / 3;
    }

    & > *:nth-last-of-type(1) {
        grid-column: 3 / 5;
    }

    background-color: ${({ theme }) => theme.color.background.toggle_keyPad};
    border-radius: ${({ theme }) => theme.borderRadius};

    @media only screen and (max-width: 500px) {
        grid-template-columns: repeat(4, 60px);
        gap: 12px;
        padding: 24px;
    }
`;

type keyItem = {
    value: string | number | JSX.Element;
    variant: React.ComponentProps<typeof KeyButton>['variant'];
};

const keyItems: keyItem[] = [
    { value: 7, variant: 'default' },
    { value: 8, variant: 'default' },
    { value: 9, variant: 'default' },
    { value: 'del', variant: 'secondary' },
    { value: 4, variant: 'default' },
    { value: 5, variant: 'default' },
    { value: 6, variant: 'default' },
    { value: plusSign, variant: 'default' },
    { value: 1, variant: 'default' },
    { value: 2, variant: 'default' },
    { value: 3, variant: 'default' },
    { value: minusSign, variant: 'default' },
    { value: dotSign, variant: 'default' },
    { value: 0, variant: 'default' },
    { value: divisionSign, variant: 'default' },
    { value: multiplySign, variant: 'default' },
    { value: 'reset', variant: 'secondary' },
    { value: equalSign, variant: 'primary' },
];

const KeyPad = () => {
    return (
        <StyledKeyPad>
            {keyItems.map(({ value, variant }, index) => (
                <KeyButton key={index} variant={variant} isText={typeof value === 'string'}>
                    {value}
                </KeyButton>
            ))}
        </StyledKeyPad>
    );
};

export default KeyPad;
