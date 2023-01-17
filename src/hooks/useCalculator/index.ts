import produce from 'immer';

import { useReducer } from 'react';
import calculate from './calculate';

import { Calc, CalcActions, CalcOperation } from './useCalculator.specs';

const hasUnclosedDot = (value: string) => {
    const lastChar = value.split('').pop();
    return lastChar === CalcOperation.Dot;
};

const isFloat = (value: string) => value.includes(CalcOperation.Dot);

const calculatorReducer: (prevCalculator: Calc, action: CalcActions) => Calc = (
    prevCalculator,
    action
) =>
    produce(prevCalculator, (draft) => {
        const lastItemIndex = draft.length - 1;
        const lastItem = !!draft.length ? draft[lastItemIndex] : '';
        const isLastItemNumber = typeof lastItem === 'number' || isFloat(lastItem);

        switch (action.type) {
            case 'insert_number': {
                if (isLastItemNumber || hasUnclosedDot(lastItem)) {
                    const newValue = String(lastItem) + action.payload;
                    draft[lastItemIndex] = isFloat(newValue) ? newValue : Number(newValue);
                } else draft.push(action.payload);

                break;
            }

            case CalcOperation.Plus:
            case CalcOperation.Minus:
            case CalcOperation.Divide:
            case CalcOperation.Multiply: {
                if (!!draft.length && (isLastItemNumber || hasUnclosedDot(lastItem)))
                    draft.push(action.type);

                break;
            }

            case CalcOperation.Dot: {
                const hasDot = isFloat(String(lastItem));

                if (isLastItemNumber && !hasDot)
                    draft[lastItemIndex] = String(lastItem) + CalcOperation.Dot;

                break;
            }

            case CalcOperation.Delete: {
                if (isLastItemNumber) {
                    const newValue = String(lastItem).slice(0, -1);

                    if (newValue)
                        draft[lastItemIndex] = isFloat(newValue) ? newValue : Number(newValue);
                    else draft.pop();
                } else draft.pop();

                break;
            }

            case CalcOperation.Reset: {
                return [];
            }

            case CalcOperation.Calculate: {
                return calculate(draft);
            }
        }
    });

function useCalculator(initialCalculator: Calc) {
    const calculatorState = useReducer(calculatorReducer, initialCalculator);

    return calculatorState;
}

export { useCalculator };

export * from './useCalculator.specs';
