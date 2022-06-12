import styled from "styled-components";

export const Heading3 = styled.h3`
  font-size: 3rem; 
  
`

const StyledText = styled.p`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  flex-basis: ${props => props.flexBasis}; 
  text-align: ${props => props.textAlign};
  display: ${props => props.display};
  padding: ${props => props.padding}; 
`;

export const Text = ({ children, color, flexBasis, fontSize, textAlign, display, padding }) => {
  return <StyledText
    color={color}
    flexBasis={flexBasis}
    fontSize={fontSize}
    textAlign={textAlign}
    display={display}
    padding={padding}
  >
    {children}
  </StyledText>
}
