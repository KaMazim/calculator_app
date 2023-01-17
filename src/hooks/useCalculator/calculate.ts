import { Calc, CalcOperation, ValidSign } from './useCalculator.specs';

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

const calculate = (calculator: Calc): Calc => {
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

export default calculate;
