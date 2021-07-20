import React from 'react'
import { Container } from './styled';

const Item = ({type, from, value}) => {
    return (
        <Container>
            <span className='text'>{type}</span>
            <span>{from}</span>
            <span>{value}</span>
        </Container>
    )
}

export default Item;
