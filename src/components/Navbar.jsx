import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'; //install at npm and import from material-ui
import { Badge } from '@material-ui/core';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

/* new design for div container*/
/*same like css*/
const Container = styled.div` 
  height: 60px;
  ${mobile({height: "55px" })}

`;
/* new design for div wrapper*/
/* have space between contain*/
const Wrapper = styled.div` 
  padding:10px 20px;
  display: flex; /*flex will let all the contents show in horizontal*/
  justify-content: space-between; /*平均分布，然後空間剛剛好*/
  align-items: center;


`;
/*left*/
const Left = styled.div`
  flex: 2; //1 for 1 box size better than width
  display: flex;
  align-items: center;
  ${mobile({ paddingRight: "10px" })}
  
`;

//Search Container
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left:25px; /*左邊的空間*/
  padding: 5px; /*component 裡面的空間*/
  
`;

//input
const Input =styled.input`
  border: none;
`;

//logo
const Logo = styled.h1`
  font-weight: bold;
  color: #A35127 ;
  letter-spacing: 10px;
  ${mobile({fontSize: "14px" })}
`;

//Right
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end; /*flex to the end point of part   */

  
`;

//Menu List
const MenuItem = styled.div`
  font-size : 14px;
  cursor : pointer;
  margin-left : 25px;
  ${mobile({fontSize: "10px" , })}

`;

//write here to arrange the order
const Navbar = () => {
  return (
    <Container> 
      <Wrapper>
        <Left>
        <Link to = {`/`} style={{ textDecoration: 'none' }}><Logo>AHMA'S HOMEMADE</Logo></Link>
        </Left>
        
        <Right>
        <Link to = {`/register`}><MenuItem>REGISTER</MenuItem></Link>
        <Link to = {`/login`}><MenuItem>LOGIN</MenuItem></Link>
        <Link to = {`/cart`}><MenuItem>
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
