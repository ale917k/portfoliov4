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
} from "./styles";

type Props = {
  title: string;
  year: number;
  concept: string;
  technologies: string[];
};

const Palette: React.FC<Props> = ({ title, year, concept, technologies }: Props) => (
  <Container height="auto">
    <BriefWrapper>
      <Title>
        {title}
        <BriefCircleButton to="/" data-cursor="arrow">
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
      </TechnologiesWrapper>
    </BriefWrapper>
  </Container>
);

export default Palette;
