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
            Hello! I'm Alessio, a Software Engineer nestled in the vibrant heart of London, crafting seamless, scalable,
            and meaningful digital solutions from the ground up with a delightful blend of creativity and technical
            mastery.
          </Paragraph>

          <Paragraph>
            With a hearty experience spanning the entire tech stack, my journey has been fuelled by an unyielding
            passion for marrying robust functionality with stellar user experiences, always tailored to meet the varied
            needs of businesses both big and small.
          </Paragraph>

          <Paragraph>
            Whether navigating the intricacies of backend systems or painting the digital canvas with user-centric
            interfaces, my mission is simple: to bring your visionary projects to life with a touch of innovation, a
            sprinkle of strategic thinking, and a whole lot of care.
          </Paragraph>

          <Paragraph>
            I love travelling, meeting new people, discover different realities and create something new, every day.
          </Paragraph>

          <Paragraph>Let's chat, explore synergies, and perhaps weave the digital future together!</Paragraph>

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
