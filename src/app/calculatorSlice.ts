import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CalcItem, CalcOperation, CalcState, ValidNumber, ValidSign } from '../types/calculator';

const initialState: CalcState = [];

const hasUnclosedDot = (value: string) => {
    const lastChar = value.split('').pop();
    return lastChar === CalcOperation.Dot;
};

const isFloatNumber = (value: string) => value.includes(CalcOperation.Dot);

const isNumber = (item: CalcItem) => {
    const isFloat = typeof item === 'string' && isFloatNumber(item);
    return typeof item === 'number' || isFloat;
};

const mathSigns: ValidSign[] = [
    CalcOperation.Multiply,
    CalcOperation.Divide,
    CalcOperation.Plus,
    CalcOperation.Minus,
];

const mathFunctions: Record<ValidSign, (firstValue: number, secondValue: number) => number> = {
    [CalcOperation.Multiply]: (firstValue, secondValue) => firstValue * secondValue,
    [CalcOperation.Divide]: (firstValue, secondValue) => firstValue / secondValue,
    [CalcOperation.Plus]: (firstValue, secondValue) => firstValue + secondValue,
    [CalcOperation.Minus]: (firstValue, secondValue) => firstValue - secondValue,
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

            if (isNumber(lastItem)) {
                const newValue = String(lastItem) + action.payload;
                state[state.length - 1] = isFloatNumber(newValue) ? newValue : Number(newValue);
            } else state.push(action.payload);
        },

        insertSign: (state, action: PayloadAction<ValidSign>) => {
            const lastItem = state[state.length - 1];
            const isUnclosedFloat = typeof lastItem === 'string' && hasUnclosedDot(lastItem);

            if (state.length && isNumber(lastItem) && !isUnclosedFloat) state.push(action.payload);
        },

        insertDot: (state) => {
            const lastItem = state[state.length - 1];
            const hasDot = isFloatNumber(String(lastItem));

            if (isNumber(lastItem) && !hasDot)
                state[state.length - 1] = String(lastItem) + CalcOperation.Dot;
        },

        deleteLastDigit: (state) => {
            const lastItem = state[state.length - 1];

            if (isNumber(lastItem)) {
                const newValue = String(lastItem).slice(0, -1);

                if (newValue)
                    state[state.length - 1] = isFloatNumber(newValue) ? newValue : Number(newValue);
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
