import { calcLabels } from '../../utils/calcLabels';

import { CalcOperation, ValidNumber } from '../../types/calculator';

import { calculatorSlice } from '../../app/calculatorSlice';

import Key from '../Key';

export type KeyPadItem = {
    value: ValidNumber | CalcOperation;
    action: () => ReturnType<calculatorAction>;
};

type calculatorAction = typeof calculatorSlice.actions[keyof typeof calculatorSlice.actions];

type GetVariant = (value: KeyPadItem['value']) => React.ComponentProps<typeof Key>['variant'];

type GetLabel = (value: KeyPadItem['value']) => KeyPadItem['value'] | string | JSX.Element;

export const getVariant: GetVariant = (value) =>
    value === CalcOperation.Calculate
        ? 'primary'
        : value === CalcOperation.Delete || value === CalcOperation.Reset
        ? 'secondary'
        : 'default';

export const getLabel: GetLabel = (value) =>
    typeof value === 'number' ? value : calcLabels[value];
