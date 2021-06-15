import React from "react";
import Headline from "components/Headline";
import Container from "components/Container";
import Skills from "./Skills";
import { Wrapper, Content, Biography, Title, Paragraph, IconsWrapper, Portrait } from "./styles";

/**
 * About Section.
 * @returns Brief biography and portrait.
 */
const About: React.FC = () => (
  <Wrapper id="about">
    <Container>
      <Headline>About</Headline>

      <Content>
        <Biography>
          <Title>Who Am I?</Title>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, sed et elementum lorem pellentesque in
            amet cursus consequat. Consectetur auctor eu velit et nibh tristique.
          </Paragraph>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, sed et elementum lorem pellentesque in
            amet cursus consequat. Consectetur auctor eu velit et nibh tristique.
          </Paragraph>

          {/* Let's find out if I'm suited enough for your needs. Drop me a line to share more projects or know more about me! */}

          <Paragraph cursive>
            What i love is travelling, meeting new people, discover different realities and create something new, every
            day.
          </Paragraph>

          <IconsWrapper>
            <a
              href="https://www.linkedin.com/in/alessio-petrin-41b058190/"
              rel="noopener noreferrer"
              target="_blank"
              data-cursor="arrow"
            >
              <img src="images/icons/linkedin.svg" alt="Linkedin" />
            </a>
            <a
              href="https://stackoverflow.com/users/11895568/ale917k?tab=profile"
              rel="noopener noreferrer"
              target="_blank"
              data-cursor="arrow"
            >
              <img src="images/icons/stack-overflow.svg" alt="Stack Overflow" />
            </a>
            <a href="https://github.com/ale917k" rel="noopener noreferrer" target="_blank" data-cursor="arrow">
              <img src="images/icons/github.svg" alt="Github" />
            </a>
          </IconsWrapper>
        </Biography>

        <Portrait src="images/portrait.png" alt="Portrait" />
      </Content>
    </Container>

    <Skills />
  </Wrapper>
);

export default About;
