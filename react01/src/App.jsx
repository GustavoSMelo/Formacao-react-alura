import React, { Component } from 'react';
import Formulario from './components/formulario';
import Lista from './components/lista'
import './style.css'

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            notes: [],
        }
    }
    criarNota = (title, annotation) => {
        this.setState({
            notes: [...this.state.notes, {title, annotation}]
        });

        console.log(this.state.notes);
    }

    render () {
        return (
            <main className="App">
                <h1>Notes</h1>
                <Formulario criarNota={this.criarNota.bind(this)}/>
                <Lista list={this.state.notes}/>
            </main>
        );
    }
}

export default App;
