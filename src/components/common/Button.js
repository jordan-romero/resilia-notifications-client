import styled from 'styled-components'


export const Button = styled.button`
    border-radius: .25rem;
    border: none;
    padding: .75rem;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
        background-color: ${props => props.theme.colors.primaryDark};
        color: white;
        box-shadow: 0 1rem 2rem rgba(14, 19, 31,  .30);
        transform: translateY(-2px);
    }
      
    &:active {
        box-shadow: 0 1rem 2rem rgba(14, 19, 31,  .30);
        transform: translateY(0);
    }

`