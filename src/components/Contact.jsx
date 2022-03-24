import { MailOutline, Phone, Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 40vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

`;
const ContactItem = styled.div`
  display: flex;
  align-content: center;
  letter-spacing: 2px;

`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
  margin: 300px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Contact = () => {
  return (
    <Container>
      <Left>
      <Title>Contact Us</Title>
      <ContactItem>
          <Description><Phone style={{marginRight:"10px"}}/>+65 9108 9652</Description>
        </ContactItem>
        <ContactItem>
          <Description><MailOutline style={{marginRight:"10px"}}/>ahmahomemade0414@gmail.com</Description>
        </ContactItem>
      </Left>
    </Container>
  )
}

export default Contact
