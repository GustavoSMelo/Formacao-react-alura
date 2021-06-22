import React from 'react'

class Categorias extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            txtCategoria: ''
        }
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
                    onClick={() => this.props.addCategoria(this.state.txtCategoria)}
                    type='button'
                >
                    Ok
                </button>
            </header>
        )
    }

}

export default Categorias
