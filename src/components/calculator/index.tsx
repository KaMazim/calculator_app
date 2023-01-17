import ReactDOMServer from 'react-dom/server';

import CalculatorHeader from './calculatorHeader';
import Input from '../Input';
import KeyPad from '../keypad';

import { StyledCalculator } from './calculator.styled';
import { CalcOperation, useCalculator } from '../../hooks/useCalculator';
import { calcLabels } from '../../utils/calcLabels';

const Calculator = () => {
    const [calculator, dispatch] = useCalculator([]);

    return (
        <StyledCalculator>
            <CalculatorHeader />
            <Input>
                {calculator
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
            </Input>
            <KeyPad dispatch={dispatch} />
        </StyledCalculator>
    );
};

export default Calculator;
