import styled from 'styled-components'

const Body = styled.div`
    display: flex; 
    justify-content: space-around; 
    flex-wrap: wrap; 
    align-items: center; 
    height: 50%; 
    background-color: ${props => props.theme.colors.grayLight}; 
    border-bottom-right-radius: 10px; 
    border-bottom-left-radius: 10px;
  `

export default Body