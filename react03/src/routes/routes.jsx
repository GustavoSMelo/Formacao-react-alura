import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import Pagina404 from '../views/Pagina404'
import Sobre from '../views/Sobre'
import Navbar from '../components/navbar'
import Postagens from '../views/Postagens'
import Post from '../views/Post'
import Categoria from '../views/Categoria'

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/sobre' component={Sobre} />
                <Route exact path='/posts' component={Postagens} />
                <Route exact path='/posts/:id' component={Post} />
                <Route exact path='/categoria/:id' component={Categoria} />

                <Route component={Pagina404}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
