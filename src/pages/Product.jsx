import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 75vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 40px;
  letter-spacing: 3px;
`;

const Desc = styled.p`
  margin:20px 0px; /*top and bottom 20px*/
  letter-spacing: 3px;
  line-height: 30px;
  text-align: justify;
`;

const Price = styled.span`
  letter-spacing: 3px;
  text-align: justify;
  font-weight: 100;
  font-size: 35px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`  
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.div`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between; 
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid;
;
  
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;

`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid;
  background-color: #A35127;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease; 
  &:hover{
    transform: scale(1.1) ; /*變大*/ 
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
          <Image src="https://firebasestorage.googleapis.com/v0/b/ahma-homemade.appspot.com/o/IMG_3376.jpg?alt=media&token=3b70aaaa-fa2d-4686-8d33-0bff8e302823"/>
        </ImgContainer>
        <InfoContainer>
          <Title>PINEAPPLE POP TARTS</Title>
          <Desc>Filled with homemade tangy sweet guilt free pineapple jam. Smooth buttery crust baked to golden crisp perfection. Pop into the mouth one at a time and see it melts in your mouth!
Perfect gift for CNY to Ong your loved ones (Pop more to Ong more!🤑) </Desc>
          <Price>SGD 25</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
                <FilterSize>
                <FilterSizeOption>Small</FilterSizeOption>
                <FilterSizeOption>Normal</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Product
