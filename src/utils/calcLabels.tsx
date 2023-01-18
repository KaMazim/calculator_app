import React from 'react';

import { CalcOperation } from '../hooks/useCalculator';

const plusSign = <>&#43;</>;
const multiplySign = <>&#215;</>;
const divisionSign = <>&#8725;</>;
const minusSign = <>&#8722;</>;
const equalSign = <>&#61;</>;
const dotSign = <>&#8228;</>;

const calcLabels = {
    [CalcOperation.Plus]: plusSign,
    [CalcOperation.Minus]: minusSign,
    [CalcOperation.Multiply]: multiplySign,
    [CalcOperation.Divide]: divisionSign,
    [CalcOperation.Calculate]: equalSign,
    [CalcOperation.Dot]: dotSign,
    [CalcOperation.Delete]: 'del',
    [CalcOperation.Reset]: 'reset',
};

export { calcLabels };
