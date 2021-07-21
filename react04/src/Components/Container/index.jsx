import React from "react";
import { ContainerMain } from './styled'
import { ThemeProvider } from 'styled-components'
import { DarkTheme, LightTheme } from '../../themes/themes'
import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato";

const Container = ({theme}) => {
    return (
        <ThemeProvider theme={theme}>
            <ContainerMain className="container">
                <Titulo>Olá Fulano!</Titulo>
                <section className="conteudo">
                    <Conta />
                    <Extrato />
                </section>
            </ContainerMain>
        </ThemeProvider>
    );
};

export default Container;
