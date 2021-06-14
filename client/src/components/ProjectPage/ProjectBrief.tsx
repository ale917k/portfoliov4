import React from "react";
import Container from "components/Container";
import Headline from "components/Headline";
import {
  BriefWrapper,
  Title,
  BackButton,
  Year,
  ConceptWrapper,
  Concept,
  DeliverablesWrapper,
  Deliverable,
} from "./styles";

type Props = {
  title: string;
  year: number;
  concept: string;
  deliverables: string[];
};

const Palette: React.FC<Props> = ({ title, year, concept, deliverables }: Props) => (
  <Container height="auto">
    <BriefWrapper>
      <Title>
        {title}
        <BackButton to="/" data-cursor="arrow">
          Back
        </BackButton>
      </Title>
      <Year>{year}</Year>

      <ConceptWrapper>
        <Headline alignItems="flex-start">Concept</Headline>
        <Concept>{concept}</Concept>
      </ConceptWrapper>

      <DeliverablesWrapper>
        <Headline alignItems="flex-end">Deliverables</Headline>
        {deliverables.map((deliverable, index) => (
          <Deliverable key={`${deliverable}-${index}`}>{deliverable}</Deliverable>
        ))}
      </DeliverablesWrapper>
    </BriefWrapper>
  </Container>
);

export default Palette;
