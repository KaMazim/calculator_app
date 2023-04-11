import React from 'react';

import CalculatorHeader from './CalculatorHeader';
import Input from '../Input';
import KeyPad from '../KeyPad';

import { StyledCalculator } from './Calculator.styled';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { calculatorLabels, getLabel } from '../../utils/label';
import { CalculatorSign } from '../../types/calculator';

const Calculator = () => {
    const calculator = useAppSelector((state) => state.calculator);
    const dispatch = useAppDispatch();

    const dotLabel = calculatorLabels[CalculatorSign.Dot];

    const items = calculator.map((item) => getLabel(item));

    return (
        <StyledCalculator>
            <CalculatorHeader />
            <Input
                value={items
                    .join(' ')
                    .replaceAll(` ${dotLabel}`, dotLabel)
                    .replaceAll(`${dotLabel} `, dotLabel)}
                readOnly
            />
            <KeyPad dispatch={dispatch} />
        </StyledCalculator>
    );
};

export default Calculator;
