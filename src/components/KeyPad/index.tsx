import React, { FC } from 'react';

import Key from '../Key';

import { StyledKeyPad } from './KeyPad.styled';

import { CalcOperation, ValidNumber, ValidSign } from '../../types/calculator';

import { calculatorSlice } from '../../app/calculatorSlice';
import { useAppDispatch } from '../../app/store';

import { getLabel, getVariant, KeyPadItem } from './KeyPad.util';

interface KeyPadProps {
    dispatch: ReturnType<typeof useAppDispatch>;
}

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
