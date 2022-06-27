import styled from "styled-components";

export const Input = styled.input`
  font-size: 1.5rem;
  padding: 1rem;
  margin: 10px;
  width: 40rem; 
  background: ${props => props.theme.colors.secondary};
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: ${props => props.theme.colors.black};
  }
`;
