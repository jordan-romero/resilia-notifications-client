import styled from 'styled-components'

const Header = styled.div`
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    height: 50%; 
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: .75rem; 
    background-color: ${props => props.theme.colors.primary}; 
  `

export default Header

