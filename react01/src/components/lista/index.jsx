import React, { Component } from 'react';
import './style.css';
import { FaTrash } from 'react-icons/fa';

class List extends Component {

    render () {
        return (
            <>
                {this.props.list.length <= 0 ?
                    <></> :
                    this.props.list.map((item, index) => (
                        <section key={index}>
                            <article>
                                Titulo: {item.title}
                                <br />
                                Categoria: {item.category}
                            </article>
                            <footer>
                                {item.annotation}
                            </footer>
                            <FaTrash
                                className='icon'
                                onClick={() => this.props.deleteCard(index).bind(this)}
                            />
                        </section>
                    ))
                }
            </>
        );
    }
}

export default List;
