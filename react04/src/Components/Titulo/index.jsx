import React from "react";
import { ContainerTitulo } from './styled'

const Titulo = ({ children }) => {
  return <ContainerTitulo className="titulo">{children}</ContainerTitulo>
}
export default Titulo;
