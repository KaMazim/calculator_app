import React from 'react';

import { Provider } from 'react-redux';

import { store } from './app/store';

import { ThemeProvider } from './providers/ThemeProvider';

import Screen from './components/Screen';
import Calculator from './components/Calculator';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <Screen>
                    <Calculator />
                </Screen>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
