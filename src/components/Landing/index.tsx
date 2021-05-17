import React from "react";
import Container from "components/Container";
import Illustration from "components/Landing/Illustration";
import Menu from "components/Landing/Menu";
import { Background, Caption, Wrapper, Title, Scroll } from "./styles";

/**
 * Landing Section.
 * @returns Headline with animated illustration and menu.
 */
const Landing: React.FC = () => {
  return (
    <Background>
      <Container>
        <Caption>Creative Developer</Caption>

        <Wrapper>
          <Title>Delivering Web & Mobile experiences.</Title>
          <Illustration />
        </Wrapper>

        <Menu />

        <Scroll>Scroll</Scroll>
      </Container>
    </Background>
  );
};

export default Landing;
