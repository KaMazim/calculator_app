import { CalcActions, CalcOperation, ValidNumber } from '../../hooks/useCalculator';
import Key from '../key';

export interface KeyPadProps {
    dispatch: React.Dispatch<CalcActions>;
}

export type KeyValue = ValidNumber | CalcOperation;

export type GetVariant = (value: KeyValue) => React.ComponentProps<typeof Key>['variant'];

export type GetLabel = (value: KeyValue) => KeyValue | string | JSX.Element;
