import { calculatorSlice } from '../../app/calculatorSlice';
import { useAppDispatch } from '../../app/store';
import { CalcOperation, ValidNumber } from '../../types/calculator';
import Key from '../Key';

type calculatorAction = typeof calculatorSlice.actions[keyof typeof calculatorSlice.actions];

export interface KeyPadProps {
    dispatch: ReturnType<typeof useAppDispatch>;
}

export type KeyPadItem = {
    value: ValidNumber | CalcOperation;
    action: () => ReturnType<calculatorAction>;
};

export type GetVariant = (
    value: KeyPadItem['value']
) => React.ComponentProps<typeof Key>['variant'];

export type GetLabel = (value: KeyPadItem['value']) => KeyPadItem['value'] | string | JSX.Element;
