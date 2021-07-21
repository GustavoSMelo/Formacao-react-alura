import React, { useState } from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { DarkTheme, LightTheme } from './themes/themes'
import ThemeOff from './assets/images/themeOff.svg'
import ThemeOn from './assets/images/themeOn.svg'

const App = () => {
    const [theme, setTheme] = useState(true)

    const handleChangeTheme = () => {
        setTheme(!theme);
    }

    return (
        <>
            <Cabecalho lamp={theme ? ThemeOff : ThemeOn} handleChangeTheme={() => handleChangeTheme()}/>
            <Container theme={theme ? LightTheme : DarkTheme} />
        </>
    );
}

export default App;
