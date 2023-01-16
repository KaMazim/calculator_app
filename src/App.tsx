import { ThemeProvider } from './providers/ThemeProvider';

import KeyPad from './components/KeyPad';
import Screen from './components/Screen';
import Input from './components/Input';
import SwitchTheme from './components/SwitchTheme';

const App = () => {
    return (
        <ThemeProvider>
            <Screen>
                <SwitchTheme />
                <Input>399,981</Input>
                <KeyPad />
            </Screen>
        </ThemeProvider>
    );
};

export default App;
