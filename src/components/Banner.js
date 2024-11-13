import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; 
import bg from "../assets/img_6.jpg";
import Button from "./reusable/Button";
import H1 from "./reusable/H1";
import WithBarTitle from "./reusable/WithBarTitle";
import { FaPlay, FaPause } from "react-icons/fa";
import Header from "./Header";
import vd_1 from "../assets/vd_1.mp4"; 

export default function Banner() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoToggle = () => {
    const video = document.getElementById("banner-video");
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Main>
      <Header />

      <Container>
        <RightBox>
          <WithBarTitle title="WITH Fitness Guru" />
          <H1>Build Perfect body shape for good and healthy life.</H1>
          
          <Link to="/BecomeMember" style={{ textDecoration: "none" }}>
            <Button animation="fadeInLeft">Become a Member</Button>
          </Link>
        </RightBox>
        
        <LeftBox>
          <Circle>
            {/* Add the video inside the Circle component */}
            <video
              id="banner-video"
              width="100%"
              height="100%"
              style={{ borderRadius: "50%" }}
              muted
            >
              <source src={vd_1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <CircleButton onClick={handleVideoToggle}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </CircleButton>
          </Circle>
        </LeftBox>
      </Container>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LeftBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const RightBox = styled.div`
  width: 50%;
  padding: 0px 100px;
`;

const Circle = styled.div`
  position: relative;
  border: 2px solid red;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 120px;
  padding: 2px;
  animation: zoomIn;
  animation-duration: 2s;
`;

const CircleButton = styled.button`
  outline: none;
  background-color: red;
  color: white;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;
