import React, {Component} from 'react';
import './style.css';

class Formulario extends Component {

    constructor (props) {
        super(props);

        this.state = {
            title: '',
            annotation: '',
            category: ''
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
        this.props.criarNota(this.state.title, this.state.category, this.state.annotation);
    }

    handleChangeCategory = (txt) => {
        this.setState({
            category: txt
        });
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

                <select
                    defaultValue={''}
                    onChange={e => this.handleChangeCategory(e.target.value)}
                >
                    <option value='' disabled>Categoria</option>
                    {this.props.categorias.map((item, index) => <option
                            value={item}
                            key={`opt - ${index}`}
                        >
                            {item}
                        </option>)
                    }
                </select>

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
