import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../api/api'
import '../../assets/css/components/cartao.css'


const Posts = () => {
    const [listPosts, setListPosts] = useState([])
    const history = useHistory()

    const getDataByAPI = async () => {
        const response = await api.get('/posts')
        setListPosts(response.data)
    }

    useEffect (() => {
        getDataByAPI()
    }, [])

    return (
        <>
            {listPosts.map(item => (
                <section key={`postagem numero: ${item.id}`} className="container flex flex--centro" onClick={() => history.push(`/posts/${item.id}`)}>
                    <article className={`cartao-post cartao-post--${item.categoria}`}>
                        <h2 className="cartao-post__titulo">{item.title}</h2>
                        <h3>{item.metadescription}</h3>
                    </article>
                </section>
            ))}
        </>
    )
}

export default Posts
