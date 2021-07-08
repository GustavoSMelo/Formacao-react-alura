import React, { useState, useEffect } from 'react'
import DadosPessoais from '../DadosPessoais'
import DadosUsuario from '../DadosUsuario'
import DadosEntrega from '../DadosEntrega'
import './style.css'
import { Typography } from '@material-ui/core'

const FormularioCadastro = () => {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [datas, setDatas] = useState([])

  useEffect(() => {
    console.log(datas)
  })

  const next = info => {
    setDatas([...datas, info])
    // eslint-disable-next-line no-const-assign
    console.log(info)
    console.log(datas)
    const support = etapaAtual + 1
    setEtapaAtual(support)
  }

  const views = [
    <DadosUsuario key={'form-view-1'} nextFunction={next} />,
    <DadosPessoais key={'form-view-2'} nextFunction={next} />,
    <DadosEntrega key={'form-view-3'} nextFunction={next}/>,
    <Typography key={'form-view-4'} variant='h5' style={{ textAlign: 'center' }}>Obrigado pela sua compra</Typography>
  ]

  return (
    <>
      <h1 className='title-index-form'>Formulario de cadastro</h1>
      {views[etapaAtual]}
    </>
  )
}

export default FormularioCadastro
