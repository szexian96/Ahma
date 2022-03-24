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
  width: 25%;
  padding: 20px;
  background-color: #E3FDFD;
`;

const Logo = styled.div`
  margin-left: -50px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 50%;
  height: 50%;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 3px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  letter-spacing: 3px;

`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #A35127;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  transition: all 0.5s ease; 
  &:hover{
    transform: scale(1.1) ; /*變大*/ 
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  letter-spacing: 3px;

`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
      <Navbar/>
      <Link to = {`/`} style={{ textDecoration: 'none' }}><Logo><Image src="https://firebasestorage.googleapis.com/v0/b/ahma-homemade.appspot.com/o/LOGO-modified.png?alt=media&token=3c78fef7-d855-4b86-b102-1bacad22d144"/></Logo></Link>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
