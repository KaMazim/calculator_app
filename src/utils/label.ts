import {
    CalculatorOperation,
    CalculatorSign,
    ValidOperation,
    ValidSign,
} from '../types/calculator';

export const calculatorLabels: Record<CalculatorOperation | CalculatorSign, string> = {
    [CalculatorSign.Plus]: '+',
    [CalculatorSign.Minus]: '-',
    [CalculatorSign.Multiply]: '×',
    [CalculatorSign.Divide]: '/',
    [CalculatorOperation.Calculate]: '=',
    [CalculatorSign.Dot]: '.',
    [CalculatorOperation.Delete]: 'del',
    [CalculatorOperation.Reset]: 'reset',
};

export const getLabel = (value: number | ValidSign | ValidOperation): string =>
    typeof value === 'number' ? String(value) : calculatorLabels[value];
