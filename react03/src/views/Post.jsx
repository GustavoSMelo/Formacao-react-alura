import React, { useState, useEffect } from 'react'
import api from '../api/api'
import '../assets/css/post.css'
import { useParams } from 'react-router-dom'
import imagem from '../assets/img/doguito404.svg'

const Post = () => {
    const [postagem, setPostagem] = useState({})
    const { id } = useParams() 

    const getDataByAPI = async () => {
        const response = await api.get(`/posts/${id}`)
        setPostagem(response.data)
    }

    useEffect(() => {
        getDataByAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <>
            {postagem.title && postagem.body ? (
                <main className='container flex flex--centro'>
                    <article className='cartao post'>
                        <h2 className='cartao__titulo'>{postagem.title}</h2>
                        <p className='cartao__texto'>{postagem.body}</p>
                    </article>
                </main>
            ) : (
                <main className="container flex flex--centro flex--coluna" >
                    <img className="doguito-imagem" src={imagem} alt="ilustração doguito"/>
                    <p className="naoencontrado-texto">
                        Não criamos essa postagem ainda 
                    </p>
                </main>
            )}
            
        </>
    )
}

export default Post 
