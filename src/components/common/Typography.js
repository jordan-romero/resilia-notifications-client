import styled from "styled-components";

export const Heading3 = styled.h3`
  font-size: 3rem; 
  
`

const StyledText = styled.p`
  font-size: 1.5rem;
  color: ${props => props.color};
  flex-basis: ${props => props.flexBasis}; 
  height: auto; 

`;

export const Text = ({ children, color, flexBasis }) => {
  return <StyledText color={color} flexBasis={flexBasis}>{children}</StyledText>
}
