import React, { FC } from 'react';

import Key from '../key';

import { StyledKeyPad } from './keypad.styled';

import { CalcOperation, ValidNumber } from '../../hooks/useCalculator';
import { GetLabel, GetVariant, KeyPadProps, KeyValue } from './keypad.specs';
import { calcLabels } from '../../utils/calcLabels';

const valuesByOrder: KeyValue[] = [
    7,
    8,
    9,
    CalcOperation.Delete,
    4,
    5,
    6,
    CalcOperation.Plus,
    1,
    2,
    3,
    CalcOperation.Minus,
    CalcOperation.Dot,
    0,
    CalcOperation.Divide,
    CalcOperation.Multiply,
    CalcOperation.Reset,
    CalcOperation.Calculate,
];

const getVariant: GetVariant = (value) =>
    value === CalcOperation.Calculate
        ? 'primary'
        : value === CalcOperation.Delete || value === CalcOperation.Reset
        ? 'secondary'
        : 'default';

const getLabel: GetLabel = (value) => (typeof value === 'number' ? value : calcLabels[value]);

const KeyPad: FC<KeyPadProps> = ({ dispatch }) => {
    return (
        <StyledKeyPad>
            {valuesByOrder.map((value, index) => {
                const variant = getVariant(value);
                const label = getLabel(value);

                return (
                    <Key
                        key={index}
                        variant={variant}
                        isText={typeof value === 'string'}
                        onClick={() => {
                            if (typeof value === 'number')
                                dispatch({ type: 'insert_number', payload: value as ValidNumber });
                            else {
                                dispatch({ type: value });
                            }
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
