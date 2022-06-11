import styled from 'styled-components'


export const StyledBox = styled.div`
  width: ${props => props.width};
  height: ${props => props.height}; 
  flexBasis=${props => props.flexBasis}
  flex=${props => props.flex}
  flexDirection=${props => props.flexDirection}
  margin-right: ${props => props.marginRight}; 
  margin-left: ${props => props.marginLeft}; 
`
export const Box =
  ({
    children,
    flexBasis,
    width,
    height,
    flex,
    flexDirection,
    marginRight,
    marginLeft
  }) => {
    return <StyledBox
      width={width}
      height={height}
      flexBasis={flexBasis}
      flex={flex}
      flexDirection={flexDirection}
      marginRight={marginRight}
      marginLeft={marginLeft}>
      {children}
    </StyledBox>
  }
