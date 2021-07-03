import React from 'react'
import { TextField, Button } from '@material-ui/core'

const DadosEntrega = () => {
  return (
    <form>
      <TextField className='inputField' id='endereco' label='endereco' type='text' />
        <section className='row'>
            <TextField className='inputField' id='cep' label='CEP' type='number' fullWidth/>
            <TextField className='inputField' id='numero' label='numero' type='number'/>
        </section>
        <section className='row'>
            <TextField className='inputField' id='cidade' label='cidade' type='text' fullWidth/>
            <TextField className='inputField' id='estado' label='estado' type='text' fullWidth/>
        </section>
        <Button type='button' color='primary' variant='contained'>Finalizar compra</Button>
    </form>
  )
}

export default DadosEntrega
