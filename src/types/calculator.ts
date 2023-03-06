export enum CalcOperation {
    Plus = 'plus',
    Minus = 'minus',
    Multiply = 'multiply',
    Divide = 'divide',
    Delete = 'delete',
    Reset = 'reset',
    Calculate = 'calculate',
    Dot = '.',
}

export type ValidNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type ValidSign =
    | CalcOperation.Plus
    | CalcOperation.Minus
    | CalcOperation.Multiply
    | CalcOperation.Divide;

// for number that have an unclosed dot, like '1.' or '2.';
export type UnclosedDottedNumber = string;

export type CalcItem = number | ValidSign | UnclosedDottedNumber;

export type CalcState = CalcItem[];
