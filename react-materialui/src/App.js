<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core";

import Home from "./Home";

const useStyles = makeStyles({
    root: {},
});

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createMuiTheme({
        spacing: 4,
        palette: {
            type: darkMode ? "dark" : "light",
            primary: {
                main: "#f44336",
            },
            secondary: {
                main: "#3EA6FF",
            },
            background: {
                default: darkMode ? "#232323" : "#FFF",
                dark: darkMode ? "#181818" : "#f4f6f8",
                paper: darkMode ? "#232323" : "#FFF",
            },
        },
    });

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Home darkMode={darkMode} setDarkMode={setDarkMode} />
        </ThemeProvider>
    );
}

>>>>>>> c67a8d54d538a186e69fee02b6697a61c61ae143
export default App;
