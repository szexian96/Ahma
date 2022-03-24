import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from "react";
import {sliderItems} from "../data"
import { mobile } from "../responsive";

//container store data
const Container = styled.div`
  width: 100%;
  height: 100vh; /*100% of the view point view height*/
  display: flex; /*all become horizontal*/
  position: relative; /*relative to its normal position(normal place) x4 for the slide not resize*/
  overflow: hidden; /*overflow will not showing up*/
  ${mobile({ height: '20vh',display:"none" })}


`;

//Arrow style
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%; /*弄成圓圈*/
  display: flex;
  align-items: center; /*讓他們對中間*/
  justify-content: center;
  position: absolute; /*什麼位置都可以放，會無視次序*/
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"}; /*props is direction left and 10pixel*/
  right: ${props => props.direction === "right" && "10px"}; /*right and 10 pixel*/
  margin: auto;
  cursor: pointer;
  z-index: 2; /*place in front*/
`;

//Wrapper like container but inside a container for slider use*/
const Wrapper = styled.div`
  height: 100%;
  display: flex; /*all become horizontal for the slide*/
  transition: all 1s ease; /*ease is effect */
  transform: translateX(${(props) => props.slideIndex * -100}vw); /*0,1,2,3,4 * -100vw --就會變加*/ 
`;

//slide
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display:flex;
  align-items: center;
  background-color: #${(props) => props.bg}; /*follow slide props bg*/
`;

//image container
const ImgContainer = styled.div` /*put image place*/
  height: 100%; /*會換放照片的size*/
  flex: 1; /*left*/
`;

//image file pattern
const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

//info container
const InfoContainer = styled.div` /*put info page*/
  flex: 1;  //right
  padding: 200px;
  margin-left: -50px;
`;

//info Title
const Title = styled.h1`
  font-size: 70px;
`;

//info subtitle
const Subtitle = styled.h2`
  font-size: 50px;
`;

//info Description
const Desc = styled.p`
  margin: 50px 0px; /*top and bottom 50 px left and right 0px是外面的*/
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  text-align: justify;
`;

//Info button
const Button = styled.button`
  padding: 10px; /*padding是裡面的空間*/
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.5s ease; 
  &:hover{
    transform: scale(1.1) ; /*變大*/ 
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0); //use state start from 0
  const handleClick = (direction) => { /*function result back to direction */
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3); // left = -1 bigger that 0 and if slide Index larger than 1
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0); // right = + 1
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}> {/*left and direction and call out arrow function*/}
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}> {/*slide index for wrapper with id */}
        {sliderItems.map((item) => ( //slider items take from id 
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={(item.img)} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Subtitle>{item.subtitle}</Subtitle>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider