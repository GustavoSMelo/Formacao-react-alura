import styled from 'styled-components'

export const Navbar = styled.header`
  background-color: ${props => props.colorTheme};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
  img {
    height: 50px;
    width: 50px;
  }
`

export const ButtonLink = styled.a`
    text-align: center;
    border-radius: 3px;
    padding: 5px 20px;
    margin: 0 10px;
    font-weight: 600;
    border: 2px solid #fff;

    color: ${props => props.color !== null ? props.color : '#41d3be'};
    background-color: ${props => props.backgroundButton !== null || props.backgroundButton !== '' ? props.backgroundButton : '#fff' };
`
