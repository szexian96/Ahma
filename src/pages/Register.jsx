import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #E3FDFD;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #E3FDFD;
  border: 5px soild black;
`;

const Logo = styled.div`
  margin-left: -50px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 40%;
  height: 40%;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 3px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  letter-spacing: 3px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #A35127;
  color: white;
  cursor: pointer;
  transition: all 0.5s ease; 
  &:hover{
    transform: scale(1.1) ; /*變大*/ 
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Navbar/>
        <Logo><Image src="https://firebasestorage.googleapis.com/v0/b/ahma-homemade.appspot.com/o/LOGO-modified.png?alt=media&token=3c78fef7-d855-4b86-b102-1bacad22d144"/></Logo>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;