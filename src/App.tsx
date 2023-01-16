import { ThemeProvider } from './providers/ThemeProvider';

import KeyPad from './components/KeyPad';
import Screen from './components/Screen';
import Input from './components/Input';

const App = () => {
    return (
        <ThemeProvider>
            <Screen>
                <Input>399,981</Input>
                <KeyPad />
            </Screen>
        </ThemeProvider>
    );
};

export default App;
