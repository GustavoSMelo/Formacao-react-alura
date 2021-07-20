import React from 'react'
import { ItemsContainer } from './styled'
import Item from '../Item'

const Items = (props) => {
    return (
        <ItemsContainer>
            <Item {...props} />
        </ItemsContainer>
    )
}

export default Items
