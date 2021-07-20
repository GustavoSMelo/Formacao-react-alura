import React from "react"
import bank_logo from "../../assets/images/bank_logo.svg"
import { Navbar, ButtonLink } from './style'
import { corPrimaria, txtBackgroundLight, backgroundLight } from '../../themes/variables'

const Cabecalho = () => {
  return (
    <Navbar colorTheme={corPrimaria} className="cabecalho">
      <img className="imagem-logo" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <ButtonLink backgroundButton={backgroundLight} color={corPrimaria} href="https://google.com">
          Ajuda
        </ButtonLink>
        <ButtonLink backgroundButton={corPrimaria} color={'#fff'} href="https://google.com">
          Sair
        </ButtonLink>
      </div>
    </Navbar>
  );
};

export default Cabecalho;
