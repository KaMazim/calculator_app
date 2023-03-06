import React, { FC } from 'react';

import Key from '../Key';

import { StyledKeyPad } from './KeyPad.styled';

import { CalcOperation, ValidNumber, ValidSign } from '../../types/calculator';
import { GetLabel, GetVariant, KeyPadProps, KeyPadItem } from './KeyPad.specs';
import { calcLabels } from '../../utils/calcLabels';
import { calculatorSlice } from '../../app/calculatorSlice';

const getVariant: GetVariant = (value) =>
    value === CalcOperation.Calculate
        ? 'primary'
        : value === CalcOperation.Delete || value === CalcOperation.Reset
        ? 'secondary'
        : 'default';

const getLabel: GetLabel = (value) => (typeof value === 'number' ? value : calcLabels[value]);

const KeyPad: FC<KeyPadProps> = ({ dispatch }) => {
    const { insertNumber, insertSign, insertDot, deleteLastDigit, clearAll, calculate } =
        calculatorSlice.actions;

    const getNumberItem = (number: ValidNumber) => ({
        value: number,
        action: () => {
            return insertNumber(number);
        },
    });

    const getSignItem = (item: ValidSign) => ({
        value: item,
        action: () => {
            return insertSign(item);
        },
    });

    const valuesByOrder: KeyPadItem[] = [
        getNumberItem(7),
        getNumberItem(8),
        getNumberItem(9),
        {
            value: CalcOperation.Delete,
            action: () => {
                return deleteLastDigit();
            },
        },
        getNumberItem(4),
        getNumberItem(5),
        getNumberItem(6),
        getSignItem(CalcOperation.Plus),
        getNumberItem(1),
        getNumberItem(2),
        getNumberItem(3),
        getSignItem(CalcOperation.Minus),
        {
            value: CalcOperation.Dot,
            action: () => {
                return insertDot();
            },
        },
        getNumberItem(0),
        getSignItem(CalcOperation.Divide),
        getSignItem(CalcOperation.Multiply),
        {
            value: CalcOperation.Reset,
            action: () => {
                return clearAll();
            },
        },
        {
            value: CalcOperation.Calculate,
            action: () => {
                return calculate();
            },
        },
    ];

    return (
        <StyledKeyPad>
            {valuesByOrder.map(({ value, action }, index) => {
                const variant = getVariant(value);
                const label = getLabel(value);

                return (
                    <Key
                        key={index}
                        variant={variant}
                        isText={typeof value === 'string'}
                        onClick={() => {
                            dispatch(action());
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
