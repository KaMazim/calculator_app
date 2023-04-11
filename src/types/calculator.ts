export enum CalculatorOperation {
    Calculate = 'calculate',
    Delete = 'delete',
    Reset = 'reset',
}

export type ValidOperation =
    | CalculatorOperation.Calculate
    | CalculatorOperation.Delete
    | CalculatorOperation.Reset;

export enum CalculatorSign {
    Plus = 'plus',
    Minus = 'minus',
    Multiply = 'multiply',
    Divide = 'divide',
    Dot = 'dot',
}

export type ValidSign =
    | CalculatorSign.Plus
    | CalculatorSign.Minus
    | CalculatorSign.Multiply
    | CalculatorSign.Divide
    | CalculatorSign.Dot;

export type ValidNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type ValidInput = ValidNumber | ValidSign | ValidOperation;
