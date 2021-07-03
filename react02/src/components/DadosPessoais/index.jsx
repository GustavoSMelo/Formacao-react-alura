import React, { useState } from 'react'
import { TextField, Switch, Button } from '@material-ui/core'

const DadosPessoais = () => {
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

  return (
    <form>
      <TextField id='nome' type='text' label='Nome' className='inputField' onChange={e => handleChangeName(e.target.value)} value={name}/>

      <TextField id='sobrenome' type='text' label='Sobrenome' className='inputField' value={lastName} onChange={e => handleChangeLastName(e.target.value)}/>

      <TextField id='cpf' type='text' label='CPF' className='inputField' value={cpf} onChange={e => handleChangeCpf(e.target.value)} />

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
      <Button type='button' color='primary' variant='contained' >Continuar</Button>
    </form>
  )
}

export default DadosPessoais
