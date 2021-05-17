import React from "react";
import Headline from "components/Headline";
import Container from "components/Container";
import projects from "data/projects.json";
import Project from "./Project";
import { Wrapper } from "./styles";

/**
 * Work Section.
 * @returns Arrays of Projects.
 */
const Work: React.FC = () => {
  return (
    <Wrapper id="work">
      <Container>
        <Headline>Work</Headline>

        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default Work;
