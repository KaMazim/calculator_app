import { ThemeProvider } from './providers/ThemeProvider';

import Screen from './components/screen';
import Calculator from './components/calculator';

const App = () => {
    return (
        <ThemeProvider>
            <Screen>
                <Calculator />
            </Screen>
        </ThemeProvider>
    );
};

export default App;
