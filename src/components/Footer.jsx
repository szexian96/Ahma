import { Facebook, Instagram, MailOutline, Phone, WhatsApp } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: flex-start;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: #A35127 ;
  letter-spacing: 10px;
`;

const Desc = styled.p`
  margin: 20px 0px; /*top and bottom 20px*/

`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  cursor: pointer;

`;

const Center = styled.div`
  flex: 1; 
`;

const Title = styled.h3`
  margin-bottom: 30px;
  letter-spacing: 2px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  letter-spacing: 2px;

`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-content: center;
  letter-spacing: 2px;

`;

const Payment = styled.img`

`;

const Right = styled.div`
  flex: 1;
  padding: 20px; 
  display: flex;
  align-items: center;
  justify-content: flex-end; /*flex to the end point of part   */

  
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AHMA'S HOMEMADE</Logo>
        <Desc style={{letterSpacing:"2px"}}>© 2022 AhMa's Homemade.  All rights reserved. </Desc>
      </Left>
      <Center>
      </Center>
      <Right>
      <SocialContainer>
          <SocialIcon color='A35127'>
            <Facebook/>
          </SocialIcon>
          <SocialIcon color='A35127'>            
          <Instagram/>
          </SocialIcon>
          <SocialIcon color='A35127'>            
          <WhatsApp/>
          </SocialIcon>
        </SocialContainer>
      </Right>
      <Desc></Desc>
    </Container>
  )
}

export default Footer
