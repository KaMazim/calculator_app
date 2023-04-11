import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CalculatorSign, ValidNumber, ValidSign } from '../types/calculator';

type CalcItem = number | ValidSign;

type CalcState = CalcItem[];

const initialState: CalcState = [];

const mathSigns: ValidSign[] = [
    CalculatorSign.Dot,
    CalculatorSign.Multiply,
    CalculatorSign.Divide,
    CalculatorSign.Plus,
    CalculatorSign.Minus,
];

const mathFunctions: Record<ValidSign, (firstValue: number, secondValue: number) => number> = {
    [CalculatorSign.Multiply]: (firstValue, secondValue) => firstValue * secondValue,
    [CalculatorSign.Divide]: (firstValue, secondValue) => firstValue / secondValue,
    [CalculatorSign.Plus]: (firstValue, secondValue) => firstValue + secondValue,
    [CalculatorSign.Minus]: (firstValue, secondValue) => firstValue - secondValue,
    [CalculatorSign.Dot]: (firstValue, secondValue) =>
        Number(String(firstValue) + '.' + String(secondValue)),
};

const calculate = (calculator: CalcState): CalcState => {
    return mathSigns.reduce((calculatorBySign, currentSign) => {
        return calculatorBySign.reduce((currentCalculator, item, index) => {
            if (item === currentSign) {
                const itemIndex = index - (calculatorBySign.length - currentCalculator.length);

                const firstIndex = itemIndex - 1;
                const secondIndex = itemIndex + 1;

                const firstValue = Number(currentCalculator[firstIndex]);
                const secondValue = Number(currentCalculator[secondIndex]);

                const newValue = mathFunctions[currentSign](firstValue, secondValue);

                return currentCalculator
                    .map((value, index) => (itemIndex === index ? newValue : value))
                    .filter((_, index) => ![firstIndex, secondIndex].includes(index));
            } else return currentCalculator;
        }, calculatorBySign);
    }, calculator);
};

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        insertNumber: (state, action: PayloadAction<ValidNumber>) => {
            const lastItem = state[state.length - 1];

            if (typeof lastItem === 'number') {
                const newValue = String(lastItem) + action.payload;
                state[state.length - 1] = Number(newValue);
            } else state.push(action.payload);
        },

        insertSign: (state, action: PayloadAction<ValidSign>) => {
            const lastItem = state[state.length - 1];

            if (state.length && typeof lastItem === 'number') state.push(action.payload);
        },

        deleteLastDigit: (state) => {
            const lastItem = state[state.length - 1];

            if (typeof lastItem === 'number') {
                const newValue = String(lastItem).slice(0, -1);

                if (newValue) state[state.length - 1] = Number(newValue);
                else state.pop();
            } else state.pop();
        },

        clearAll: () => {
            return [];
        },

        calculate: (state) => {
            return calculate(state);
        },
    },
});
