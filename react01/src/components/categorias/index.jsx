import React from 'react'

class Categorias extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            txtCategoria: ''
        }
    }

    handleClickButton = () => {
        const sentinel = this.state.txtCategoria;

        this.setState({
            txtCategoria: ''
        });

        this.props.addCategoria(sentinel);

    }

    render () {
        return (
            <header>
                <input
                    type='text'
                    placeholder='categoria'
                    value={this.state.txtCategoria}
                    onChange={e => this.setState({
                        txtCategoria: e.target.value
                    })}
                />
                <button
                    onClick={this.handleClickButton.bind(this)}
                    type='button'
                >
                    Ok
                </button>
            </header>
        )
    }

}

export default Categorias
