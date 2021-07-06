import React from 'react'
import { TextField, Button } from '@material-ui/core'

// eslint-disable-next-line react/prop-types
const DadosUsuario = ({ nextFunction }) => {
  const submitFunction = (event) => {
    event.preventDefault()
    nextFunction()
  }

  return (
    <form onSubmit={() => submitFunction()}>
      <TextField className='inputField' label='email' type='text' id='email' required={true} />
      <TextField className='inputField' label='password' type='password' id='password' required={true} />
      <Button type='submit' variant='contained' color='primary'>Continuar... </Button>
    </form>
  )
}

export default DadosUsuario
