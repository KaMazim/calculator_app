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

export type Calc = CalcItem[];

type InsertNumberAction = { type: 'insert_number'; payload: ValidNumber };
type InsertSignAction = { type: ValidSign };
type InsertDotAction = { type: CalcOperation.Dot };

type DeleteAction = { type: CalcOperation.Delete };
type ResetAction = { type: CalcOperation.Reset };

type CalculateAction = { type: CalcOperation.Calculate };

export type CalcActions =
    | CalculateAction
    | InsertNumberAction
    | InsertSignAction
    | InsertDotAction
    | DeleteAction
    | ResetAction;
