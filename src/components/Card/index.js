import styled from 'styled-components'
import Header from './Header'
import Body from './Body';


const Card = styled.div`
  display: flex;
  flex-direction: column; 
  width: 70rem; 
  height: auto;
  box-shadow: 0 1rem 2rem rgba(14, 19, 31,  .30);
  border-radius: 10px;
  justify-content: space-around;
  font-size: 2rem;
  text-align: start; 
  margin-right: auto; 
  margin-left: auto; 
  margin-bottom: 3rem; 
`;


Card.Header = Header;
Card.Body = Body;

export default Card;

