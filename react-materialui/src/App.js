import { Button, ThemeProvider } from "@material-ui/core";

function App() {
    return (
        <ThemeProvider>
            <Button variant="contained" color="primary">
                Primary
            </Button>
        </ThemeProvider>
    );
}
export default App;
