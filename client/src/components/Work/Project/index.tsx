import React from "react";
import Container from "components/Container";
import Preview from "./Preview";
import { Wrapper, Content, Title, Headline } from "./styles";

type Props = {
  title: string;
  headline: string;
  bg: string;
  previewImages: string[];
  year: number;
  concept: string;
  deliverables: string[];
  responsiveImages: string[];
  palette: string[];
  typographyImg: string;
  pagesImages: string[];
};

/**
 * Project Card.
 * @returns Project with clickable Preview image, Title and Headline.
 */
const Project: React.FC<Props> = ({ title, headline, bg }: Props) => {
  return (
    <Wrapper>
      <Container direction="row">
        <Preview bg={bg} />

        <Content>
          <Title>{title}</Title>
          <Headline>{headline}</Headline>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Project;
