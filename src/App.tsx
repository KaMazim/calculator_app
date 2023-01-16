import { ThemeProvider } from './providers/ThemeProvider';

import KeyPad from './components/KeyPad';
import Screen from './components/Screen';
import Input from './components/Input';

import CalcHeader from './components/CalcHeader';

const App = () => {
    return (
        <ThemeProvider>
            <Screen>
                <CalcHeader />
                <Input>399,981</Input>
                <KeyPad />
            </Screen>
        </ThemeProvider>
    );
};

export default App;
