import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

// eslint-disable-next-line react/prop-types
const DadosUsuario = ({ nextFunction }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitFunction = () => {
    nextFunction({ email, password })
  }

  const handleChangeEmail = event => { setEmail(event) }
  const handleChangePassword = event => { setPassword(event) }

  return (
    <form onSubmit={() => submitFunction()}>
      <TextField className='inputField' label='email' value={email} type='email' id='email' required={true} onChange={event => handleChangeEmail(event.target.value)} />
      <TextField className='inputField' label='password' valeu={password} type='password' id='password' required={true} onChange={event => handleChangePassword(event.target.value)} />
      <Button type='submit' variant='contained' color='primary'>Continuar... </Button>
    </form>
  )
}

export default DadosUsuario
