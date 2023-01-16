import { ThemeProvider } from './providers/ThemeProvider';

import KeyPad from './components/KeyPad';
import Screen from './components/Screen';

const App = () => {
    return (
        <ThemeProvider>
            <Screen>
                <KeyPad />
            </Screen>
        </ThemeProvider>
    );
};

export default App;
