import React from 'react'
import CategoriaList from '../components/categoriasList'
import Posts from '../components/posts'
import { useParams } from 'react-router-dom'

const Categoria = () => {
    const { id } = useParams()
    return (
        <>
            <section className='container'>
                <h2 className='titulo-pagina'>Pet notícia</h2>
            </section>

            <CategoriaList />
            <Posts url={`/posts?categoria=${id}`} />
        </>
    )
}

export default Categoria
