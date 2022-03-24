import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Products from "../components/Products"

const Container = styled.div``;

const Title = styled.h1`
  margin: 30px 30px 0px 30px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
`;

const Option = styled.option`
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>CNY COOKIES</Title>
      {/*<FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText></Filter>
        <Select>
          <Option></Option>
        </Select>
        <Filter><FilterText>Sort Products:</FilterText></Filter>
        <Select>
          <Option></Option>
        </Select>
      </FilterContainer>*/}
      <Products/>
      <Contact/>
      <Footer/>
    </Container>
  )
}

export default ProductList
