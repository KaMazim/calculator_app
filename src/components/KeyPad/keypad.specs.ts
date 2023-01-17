import { CalcActions, CalcOperation, ValidNumber } from '../../hooks/useCalculator';
import KeyButton from '../KeyButton';

export interface KeyPadProps {
    dispatch: React.Dispatch<CalcActions>;
}

export type KeyValue = ValidNumber | CalcOperation;

export type GetVariant = (value: KeyValue) => React.ComponentProps<typeof KeyButton>['variant'];

export type GetLabel = (value: KeyValue) => KeyValue | string | JSX.Element;
