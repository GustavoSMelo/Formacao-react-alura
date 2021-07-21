import React from 'react'
import { ItemsContainer } from './styled'
import Item from '../Item'
import ImageFilter from '../ImageFilter'

const Items = (props) => {
    return (
        <ItemsContainer>
            {ImageFilter(props.type)}
            <Item {...props} />
            <span>{props.date}</span>
        </ItemsContainer>
    )
}

export default Items
