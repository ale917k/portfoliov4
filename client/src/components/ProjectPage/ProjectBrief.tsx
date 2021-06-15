import React from "react";
import Container from "components/Container";
import Headline from "components/Headline";
import {
  BriefWrapper,
  Title,
  BriefCircleButton,
  Year,
  ConceptWrapper,
  Concept,
  TechnologiesWrapper,
  Technology,
  CodeLink,
} from "./styles";

type Props = {
  title: string;
  year: number;
  concept: string;
  technologies: string[];
  codeUrl: string;
};

const Palette: React.FC<Props> = ({ title, year, concept, technologies, codeUrl }: Props) => (
  <Container height="auto">
    <BriefWrapper>
      <Title>
        {title}
        <BriefCircleButton to="/" data-cursor="arrow-left">
          Back
        </BriefCircleButton>
      </Title>
      <Year>{year}</Year>

      <ConceptWrapper>
        <Headline alignItems="flex-start">Concept</Headline>
        <Concept>{concept}</Concept>
      </ConceptWrapper>

      <TechnologiesWrapper>
        <Headline alignItems="flex-end">Technologies</Headline>
        {technologies.map((technology, index) => (
          <Technology key={`${technology}-${index}`}>{technology}</Technology>
        ))}
        <Technology>
          <CodeLink href={codeUrl} rel="noopener noreferrer" target="_blank" data-cursor="arrow">
            View code
          </CodeLink>
        </Technology>
      </TechnologiesWrapper>
    </BriefWrapper>
  </Container>
);

export default Palette;
