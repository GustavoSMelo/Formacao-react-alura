import React from 'react'
import { TextField, Button } from '@material-ui/core'

const DadosUsuario = () => {
  return (
    <form>
      <TextField className='inputField' label='email' type='text' id='email' />
      <TextField className='inputField' label='password' type='password' id='password' />
      <Button type='button' variant='contained' color='primary'>Continuar</Button>
    </form>
  )
}

export default DadosUsuario
