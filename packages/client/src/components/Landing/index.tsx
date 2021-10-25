import React from "react";
import Container from "components/Container";
import Illustration from "components/Landing/Illustration";
import Menu from "components/Landing/Menu";
import { Background, Caption, Wrapper, Title, Scroll } from "./styles";

/**
 * Landing Section.
 * @returns Headline with animated illustration and menu.
 */
const Landing: React.FC = () => (
  <Background id="landing">
    <Caption>Creative Developer</Caption>

    <Container>
      <Wrapper>
        <Title>Delivering Web & Mobile experiences.</Title>
        <Illustration />
      </Wrapper>
    </Container>

    <Menu />
    <Scroll>Scroll</Scroll>
  </Background>
);

export default Landing;
