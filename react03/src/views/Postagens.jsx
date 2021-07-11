import React from 'react'
import CategoriaList from '../components/categoriasList'
import Posts from '../components/posts'

const Postagens = () => {
    return (
        <main>
            <section className='container'>
                <h2 className='titulo-pagina'>Pet notícia</h2>
            </section>
            <CategoriaList />
            <Posts />
        </main>
    )
}

export default Postagens
