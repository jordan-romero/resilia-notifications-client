import styled from 'styled-components'


export const Button = styled.button`
    border-radius: .25rem;
    border: none;
    padding: .75rem;
    background-color: red;
    color: white;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
        background-color: blue;
        color: white;
        box-shadow: 0 1rem 2rem rgba(black, .40);
        transform: translateY(-2px);
    }
      
    &:active {
        box-shadow: 0 1rem 1rem rgba(black, 0.25);
        transform: translateY(0);
    }

`