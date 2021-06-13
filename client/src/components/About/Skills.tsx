import React from "react";
import Headline from "components/Headline";
import Container from "components/Container";
import { SkillsWrapper, SkillsImg } from "./styles";

/**
 * Skills Section.
 * @returns Image with all skills logo combined.
 */
const Skills: React.FC = () => (
  <SkillsWrapper>
    <Container>
      <Headline>Skill set</Headline>

      <SkillsImg />
    </Container>
  </SkillsWrapper>
);

export default Skills;
