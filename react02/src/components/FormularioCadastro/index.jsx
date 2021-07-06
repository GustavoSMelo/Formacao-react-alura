import React, { useState } from 'react'
import DadosPessoais from '../DadosPessoais'
import DadosUsuario from '../DadosUsuario'
import DadosEntrega from '../DadosEntrega'
import './style.css'

const FormularioCadastro = () => {
  const [etapaAtual, setEtapaAtual] = useState(0)

  const next = () => {
    // eslint-disable-next-line no-const-assign
    const support = etapaAtual + 1
    setEtapaAtual(support)
  }

  const formularioRenderizado = (etapa) => {
    if (etapa === 0) {
      return <DadosUsuario nextFunction={next} />
    } else if (etapa === 1) {
      return <DadosPessoais nextFunction={next} />
    } else {
      return <DadosEntrega />
    }
  }

  return (
    <>
      {formularioRenderizado(etapaAtual)}
    </>
  )
}

export default FormularioCadastro
