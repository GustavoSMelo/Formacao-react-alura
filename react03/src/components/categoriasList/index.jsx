import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../api/api'
import '../../assets/css/blog.css'

const CategoriaList = () => {
    const [categorias, setCategorias] = useState([])

    const getDataByAPI = async () => {
        const response = await api.get('/categorias')
        setCategorias(response.data) 
    }

    useEffect(() => {
        getDataByAPI()
    }, [])

    return (
        <ul className='lista-categorias container flex'>
            {categorias.map(categoria => (
                <Link to={`/categoria/${categoria.id}`}>
                    <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
                        {categoria.nome}
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default CategoriaList
