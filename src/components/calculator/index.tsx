import React from 'react';

import ReactDOMServer from 'react-dom/server';

import CalculatorHeader from './CalculatorHeader';
import Input from '../Input';
import KeyPad from '../KeyPad';

import { StyledCalculator } from './Calculator.styled';
import { CalcOperation, useCalculator } from '../../hooks/useCalculator';
import { calcLabels } from '../../utils/calcLabels';

const Calculator = () => {
    const [calculator, dispatch] = useCalculator([]);

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
