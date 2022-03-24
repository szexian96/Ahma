import styled from "styled-components"
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between; /*space between the 2 element*/
  background-color: #fff1e6;
  ${mobile({ padding: '0px', flexDirection: 'column' })}
`;



const Categories = () => {
  return (
    <Container>
      {categories.map(item => (
        <CategoryItem item={item}  key={item.id}/> //category take from categoryItem
      ))}
    </Container>
  )
}

export default Categories
