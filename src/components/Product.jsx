import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components'

const Info = styled.div`
  opacity: 0;
  width : 100%;
  height: 100%;
  position: absolute; /*follow parent*/
  top: 0;
  left: 0;
  z-index : 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition : all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F4B651;
  position: relative;

  &:hover ${Info} { /*write before container so Info will show up*/
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute; /*absolute location for the parent photo*/
`;

const Image = styled.img`
  height: 100%;

  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    background-color: white;
    transform: scale(1.1) ; /*變大*/ 
  }
`;


const Product = ({item}) => { //take from products item
  return (
    <Container>
      <Image src={item.img}/>
      <Circle/>
      <Info>
        <Icon>
          <ShoppingCartOutlined/>
        </Icon>
        <Icon>
          <SearchOutlined/>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product