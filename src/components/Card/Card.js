
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column; 
  width: 70rem; 
  height: 15rem;
  background-color: ${props => props.theme.colors.secondaryLight}; 
  box-shadow: 0 1rem 2rem rgba(14, 19, 31,  .30);
  border-radius: 15px;
  justify-content: space-around;
  font-size: 2rem;
  text-align: start; 
  margin-right: auto; 
  margin-left: auto; 
`;




export default Card;