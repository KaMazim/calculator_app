import React from 'react';

import Key from '../Key';

import { StyledKeyPad } from './KeyPad.styled';

import type { useAppDispatch } from '../../app/store';

import { getKeyPadItem, type KeyPadItem } from './KeyPad.util';
import { CalculatorOperation, CalculatorSign } from '../../types/calculator';

interface KeyPadProps {
    dispatch: ReturnType<typeof useAppDispatch>;
}

const { Calculate, Delete, Reset } = CalculatorOperation;
const { Plus, Minus, Dot, Divide, Multiply } = CalculatorSign;

const digitsByOrder: Array<KeyPadItem['value']> = [
    7,
    8,
    9,
    Delete,
    4,
    5,
    6,
    Plus,
    1,
    2,
    3,
    Minus,
    Dot,
    0,
    Divide,
    Multiply,
    Reset,
    Calculate
];

const keyPadItems = digitsByOrder.map((value) => getKeyPadItem(value));

const KeyPad: React.FC<KeyPadProps> = ({ dispatch }) => {
    return (
        <StyledKeyPad>
            {keyPadItems.map(({ action, label, value, variant }, index) => {
                return (
                    <Key
                        key={index}
                        variant={variant}
                        isText={typeof value === 'string'}
                        onClick={() => {
                            dispatch(action);
                        }}
                    >
                        {label}
                    </Key>
                );
            })}
        </StyledKeyPad>
    );
};

export default KeyPad;
