import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #F4B651;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;



const Announcement = () => {
  return (
    <div>
      <Container>
      GRAB OUR “GONG HEY FATT CHOY” SET @ $80 ONLY!      
      </Container>
    </div>
  )
}

export default Announcement
