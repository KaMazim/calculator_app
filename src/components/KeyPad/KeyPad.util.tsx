import { getLabel } from '../../utils/label';

import {
    CalculatorOperation,
    CalculatorSign,
    type ValidInput
} from '../../types/calculator';

import { calculatorSlice } from '../../app/calculatorSlice';

import type { KeyProps } from '../Key';

const { insertNumber, insertSign, deleteLastDigit, clearAll, calculate } =
    calculatorSlice.actions;

type calculatorAction =
    (typeof calculatorSlice.actions)[keyof typeof calculatorSlice.actions];

export interface KeyPadItem {
    value: ValidInput;
    label: string;
    variant: KeyProps['variant'];
    action: ReturnType<calculatorAction>;
}

export const getKeyPadItem = (value: KeyPadItem['value']): KeyPadItem => {
    return {
        value,
        label: getLabel(value),
        variant: getKeyVariant(value),
        action: getKeyAction(value)
    };
};

export const getKeyVariant = (
    value: KeyPadItem['value']
): KeyProps['variant'] => {
    switch (value) {
        case CalculatorOperation.Calculate: {
            return 'primary';
        }

        case CalculatorOperation.Delete:
        case CalculatorOperation.Reset: {
            return 'secondary';
        }

        default: {
            return 'default';
        }
    }
};

const getKeyAction = (value: KeyPadItem['value']): KeyPadItem['action'] => {
    if (typeof value === 'number') return insertNumber(value);

    switch (value) {
        case CalculatorSign.Plus:
        case CalculatorSign.Minus:
        case CalculatorSign.Multiply:
        case CalculatorSign.Divide:
        case CalculatorSign.Dot: {
            return insertSign(value);
        }

        case CalculatorOperation.Calculate: {
            return calculate();
        }
        case CalculatorOperation.Delete: {
            return deleteLastDigit();
        }
        case CalculatorOperation.Reset: {
            return clearAll();
        }
    }
};
