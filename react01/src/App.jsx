import React, { Component } from 'react';
import Formulario from './components/formulario';
import Lista from './components/lista'
import './style.css'
import Categoria from './components/categorias'

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            notes: [],
            categorias: [],
        }
    }
    criarNota = (title, category , annotation) => {
        this.setState({
            notes: [...this.state.notes, {title, category, annotation}]
        });

        console.log(this.state.notes);
    }

    deletarNota = (arryPosition) => {
        const newArryNotes = this.state.notes.filter((_, index) => index !== arryPosition);


        this.setState({
            notes: newArryNotes
        });

    }

    addCategoria = async (categoria) => {
        await this.setState({
            categorias: [...this.state.categorias, categoria]
        });

        console.log(this.state.categorias);
    }

    render () {
        return (
            <main className="App">
                <h1>Notes</h1>
                <Categoria addCategoria={this.addCategoria.bind(this)} />
                <span></span>
                <Formulario
                    categorias={this.state.categorias}
                    criarNota={this.criarNota}
                />
                <Lista
                    list={this.state.notes}
                    deleteCard={this.deletarNota}/>
            </main>
        );
    }
}

export default App;
