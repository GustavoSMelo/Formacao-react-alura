import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

// eslint-disable-next-line react/prop-types
const DadosEntrega = ({ nextFunction }) => {
  const [endereco, setEndereco] = useState('')
  const [cep, setCep] = useState(0)
  const [numero, setNumero] = useState(0)
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')

  const handleChangeEndereco = event => { setEndereco(event.target.value) }
  const handleChangeCep = event => { setCep(event.target.value) }
  const handleChangeNumero = event => { setNumero(event.target.value) }
  const handleChangeCidade = event => { setCidade(event.target.value) }
  const handleChangeEstado = event => { setEstado(event.target.value) }

  const handleSubmit = event => {
    event.preventDefault()
    nextFunction({ endereco, cep, numero, cidade, estado })
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <TextField className='inputField' id='endereco' value={endereco} onChange={event => handleChangeEndereco(event)} label='endereco' type='text' />
      <section className='row'>
        <TextField className='inputField' id='cep' onChange={event => handleChangeCep(event)} value={cep} label='CEP' type='number' fullWidth/>
        <TextField className='inputField' id='numero' onChange={event => handleChangeNumero(event)} value={numero} label='numero' type='number'/>
      </section>
      <section className='row'>
        <TextField className='inputField' id='cidade' onChange={event => handleChangeCidade(event)} value={cidade} label='cidade' type='text' fullWidth/>
        <TextField className='inputField' id='estado' onChange={event => handleChangeEstado(event)} value={estado} label='estado' type='text' fullWidth/>
      </section>
      <Button type='submit' color='primary' variant='contained'>Finalizar compra</Button>
    </form>
  )
}

export default DadosEntrega
