import React, { Component } from 'react';
import './style.css'

class List extends Component {

    render () {
        return (
            <>
                {this.props.list.length <= 0 ?
                    <></> :
                    this.props.list.map((item, index) => (
                        <section key={index}>
                            <article>
                                {item.title}
                            </article>
                            <footer>
                                {item.annotation}
                            </footer>
                        </section>
                    ))
                }
            </>
        );
    }
}

export default List;
