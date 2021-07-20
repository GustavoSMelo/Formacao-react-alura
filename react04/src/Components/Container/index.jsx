import React from "react";
import { ContainerMain } from './styled'

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato";

const Container = () => {
  return (
    <ContainerMain className="container">
      <Titulo>Olá Fulano!</Titulo>
      <section className="conteudo">
        <Conta />
        <Extrato />
      </section>
    </ContainerMain>
  );
};

export default Container;
