import React, { useState } from 'react'
import { TextField, Switch, Button } from '@material-ui/core'

// eslint-disable-next-line react/prop-types
const DadosPessoais = ({ nextFunction }) => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [cpf, setCpf] = useState('')
  const [wantPromo, setWantPromo] = useState(false)
  const [wantNews, setWantNews] = useState(false)

  const handleChangeName = event => {
    setName(event)
  }

  const handleChangeLastName = event => {
    setLastName(event)
  }

  const handleChangeCpf = event => {
    setCpf(event)
  }

  const handleChangeWantPromo = event => {
    setWantPromo(event)
  }

  const handleChangeWantNews = event => {
    setWantNews(event)
  }

  const submitFunction = (event) => {
    event.preventDefault()
    nextFunction()
  }

  return (
    <form onSubmit={event => submitFunction(event)}>
      <TextField id='nome' type='text' label='Nome' className='inputField' onChange={e => handleChangeName(e.target.value)} value={name} required={true}/>

      <TextField id='sobrenome' type='text' label='Sobrenome' className='inputField' value={lastName} onChange={e => handleChangeLastName(e.target.value)} required={true}/>

      <TextField id='cpf' type='text' label='CPF' className='inputField' value={cpf} onChange={e => handleChangeCpf(e.target.value)} required={true}/>

      <section className='row'>
        <section className='row'>
          <label>Promocoes</label>
          <Switch color='primary' checked={wantPromo} onClick={() => handleChangeWantPromo(!wantPromo)} />
        </section>

        <section className='row'>
          <label>Novidades</label>
          <Switch color='primary' checked={wantNews} onClick={() => handleChangeWantNews(!wantNews)}/>
        </section>
      </section>
      <Button type='submit' color='primary' variant='contained' >Continuar</Button>
    </form>
  )
}

export default DadosPessoais
