import styled from 'styled-components'

export const ItemsContainer = styled.div`
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12pt;

    span {
        color: ${props => props.theme.text};
    }
`
