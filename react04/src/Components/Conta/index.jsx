import React, { useState } from "react";
import styled from "styled-components";
import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import { Icone } from '../../themes/index';
import { Box, Saldo, Detalhes, Botao } from './styled';

const IconeMargin = styled(Icone)`
    margin-top: 2px;
`

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box className="box">
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <Icone className="imagem-icone" src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalhes className="detalhe">R$</Detalhes> 0,00{" "}
          </Saldo>
        ) : null}
      </div>

      <Botao className="btn" onClick={toggleHandler}>
        <IconeMargin
          style={{ marginTop: "2px" }}
          className="imagem-icone"
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Botao>
    </Box>
  );
};

export default Conta;
