import React from "react";
import Headline from "components/Headline";
import Container from "components/Container";
import Skills from "./Skills";
import { Content, Biography, Title, Paragraph, Portrait } from "./styles";

/**
 * About Section.
 * @returns Brief biography and portrait.
 */
const About: React.FC = () => (
  <div id="about">
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
        </Biography>

        <Portrait src="images/portrait.png" alt="Portrait" />
      </Content>
    </Container>

    <Skills />
  </div>
);

export default About;
