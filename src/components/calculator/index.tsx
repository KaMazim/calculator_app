import React from 'react';

import ReactDOMServer from 'react-dom/server';

import CalculatorHeader from './CalculatorHeader';
import Input from '../Input';
import KeyPad from '../KeyPad';

import { StyledCalculator } from './Calculator.styled';
import { calcLabels } from '../../utils/calcLabels';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { CalcOperation } from '../../types/calculator';

const Calculator = () => {
    const calculator = useAppSelector((state) => state.calculator);
    const dispatch = useAppDispatch();

    return (
        <StyledCalculator>
            <CalculatorHeader />
            <Input
                value={calculator
                    .map((item) => {
                        if (
                            item === CalcOperation.Plus ||
                            item === CalcOperation.Minus ||
                            item === CalcOperation.Divide ||
                            item === CalcOperation.Multiply
                        )
                            return ReactDOMServer.renderToString(calcLabels[item]);
                        else return item;
                    })
                    .join(' ')}
                readOnly
            />
            <KeyPad dispatch={dispatch} />
        </StyledCalculator>
    );
};

export default Calculator;
