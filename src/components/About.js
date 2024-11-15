import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link for navigation
import bg from "../assets/img_9.webp";
import Button from "./reusable/Button";
import H1 from "./reusable/H1";
import H2 from "./reusable/H2";
import Paragraph from "./reusable/Paragraph";
import WithBarTitle from "./reusable/WithBarTitle";

export default function About() {
  return (
    <Container>
      <Left>
        <Image src={bg} />
      </Left>
      <Right>
        <WithBarTitle title="About Our Gym" />
        <H1 color="#2c234d">
          SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!
        </H1>

        <H2>
          Brook presents your services with flexible, convenient, and composed
          layouts. You can select your favorite layouts & elements for circular
          customization possibilities. Pixel-perfect replication of the design is intended.
        </H2>

        <Paragraph>
          Brook presents your services with flexible, convenient, and efficient
          multipurpose layouts. You can select your favorite layouts.
        </Paragraph>

        {/* Link to BecomeMember component */}
        <Link to="/BecomeMember" style={{ textDecoration: "none" }}>
          <Button style={{ marginTop: 30 }}>Become a Member</Button>
        </Link>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  width: 45%;
`;

const Image = styled.img`
  width: 70%;
  height: 80%;
`;
