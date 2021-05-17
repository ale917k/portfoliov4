import React from "react";
import Headline from "components/Headline";
import Container from "components/Container";
import { SkillsWrapper, SkillsImg } from "./styles";

/**
 * Skills Section.
 * @returns Image with all skills logo combined.
 */
const Skills: React.FC = () => {
  return (
    <SkillsWrapper>
      <Container>
        <Headline>Skill set</Headline>

        <SkillsImg src="images/skills.png" alt="Skills" />
      </Container>
    </SkillsWrapper>
  );
};

export default Skills;
