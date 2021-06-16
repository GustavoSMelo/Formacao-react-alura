import React, {Component} from 'react';
import './style.css';

class Formulario extends Component {

    constructor (props) {
        super(props);

        this.state = {
            title: '',
            annotation: ''
        }
    }

    handleChangeTitle = event => {
        this.setState({
            title: event.target.value
        });
    }

    handleChangeAnnotations = event => {
        this.setState({
            annotation: event.target.value
        });
    }

    handleClickButton = () => {
        this.props.criarNota(this.state.title, this.state.annotation);
    }

    render () {

        return (
            <form>
                <input
                    type='text'
                    placeholder='Title'
                    name='title'
                    onChange={this.handleChangeTitle.bind(this)}
                    value={this.state.title}
                />

                <textarea
                    onChange={this.handleChangeAnnotations.bind(this)}
                    placeholder='Write your annotation here'
                    value={this.state.annotation}
                />

                <button type='button'
                    onClick={this.handleClickButton.bind(this)}
                >
                    Create note
                </button>
            </form>
        )
    }
}

export default Formulario;
