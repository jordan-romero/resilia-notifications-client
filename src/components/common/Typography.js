import styled from "styled-components";

export const Heading2 = styled.h2`
  font-size: 6rem; 
  
`

const StyledText = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.color});
  background-color: white; 
  height: auto; 
  width: auto; 

`;

export const Text = ({ children, color }) => {
  console.log(color)
  return <StyledText props={color}>{children}</StyledText>
}
