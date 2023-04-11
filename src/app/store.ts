import { configureStore } from '@reduxjs/toolkit';
import {
    type TypedUseSelectorHook,
    useSelector,
    useDispatch
} from 'react-redux';

import { calculatorSlice } from './calculatorSlice';
import { colorThemeSlice } from './colorThemeSlice';

export const store = configureStore({
    reducer: {
        calculator: calculatorSlice.reducer,
        colorTheme: colorThemeSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
