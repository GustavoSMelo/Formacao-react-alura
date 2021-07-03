import React from 'react'
import DadosUsuario from '../DadosUsuario'
import DadosPessoais from '../DadosPessoais'
import './style.css'
import DadosEntrega from '../DadosEntrega'

const FormularioCadastro = () => {
  return (
    <>
      <DadosPessoais />
      <DadosUsuario />
      <DadosEntrega />
    </>
  )
}

export default FormularioCadastro
