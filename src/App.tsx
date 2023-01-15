import Container from './components/Container';
import Screen from './components/Screen';
import { ThemeProvider } from './providers/ThemeProvider';

const App = () => {
    return (
        <ThemeProvider>
            <Screen>
                <Container />
            </Screen>
        </ThemeProvider>
    );
};

export default App;
