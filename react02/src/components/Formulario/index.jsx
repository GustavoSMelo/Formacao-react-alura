import React, { useState } from 'react'
import { Button, TextField, Switch } from '@material-ui/core'
import './style.css'

const Formulario = () => {
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

  const handleClickButton = () => {
    console.log([
      name,
      lastName,
      cpf,
      wantNews,
      wantPromo
    ])
  }

  return (
        <form>
            <TextField id='nome' type='text' label='Nome' className='inputField' onChange={e => handleChangeName(e.target.value)} value={name}/>

            <TextField id='sobrenome' type='text' label='Sobrenome' className='inputField' value={lastName} onChange={e => handleChangeLastName(e.target.value)}/>

            <TextField id='cpf' type='text' label='CPF' className='inputField' value={cpf} onChange={e => handleChangeCpf(e.target.value)} />

            <section className='row'>
                <label>Promocoes</label>
                <Switch color='primary' checked={wantPromo} onClick={() => handleChangeWantPromo(!wantPromo)} />
            </section>

            <section className='row'>
                <label>Novidades</label>
                <Switch color='primary' checked={wantNews} onClick={() => handleChangeWantNews(!wantNews)}/>
            </section>

            <Button variant='contained' color='primary' onClick={() => handleClickButton()}>Cadastrar</Button>
    </form>
  )
}

export default Formulario
