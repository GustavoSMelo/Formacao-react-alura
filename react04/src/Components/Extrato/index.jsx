import React from 'react';
import { Box, Botao } from '../Conta/styled';
import { extratoLista } from '../../info';
import Items from '../Items';

const Extrato = () => {
    return (
        <Box>
            {extratoLista.updates.map(item => <Items key={item.id} type={item.type} date={item.date} from={item.from}/> )}
            <Botao>Ver Mais</Botao>
        </Box>
    )
}

export default Extrato
