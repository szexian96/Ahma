import styled from "styled-components"

const Container = styled.div`
  flex:1;
  margin: 30px;
  height: 70vh;
  position: relative;
  cursor: pointer;
  `;

const Image = styled.img`
  width: 100%;
  height: 100%;
  filter: brightness(80%);
  object-fit: cover;
 
`;


const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column; /*let the button go down*/
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease; 
  &:hover{
    transform: scale(1.1) ; /*變大*/ 
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 50pt;
  letter-spacing: 10px;
  
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
      </Info>
    </Container>
  )
}


export default CategoryItem
