import React from "react";
import Container from "components/Container";
import Preview from "./Preview";
import { Wrapper, Content, Title, Headline } from "./styles";

type Props = ProjectType & { isOdd: boolean };

/**
 * Project Card.
 * @returns Project with clickable Preview image, Title and Headline.
 */
const Project: React.FC<Props> = ({ title, headline, bgHsl, imgName, isOdd }: Props) => (
  <Wrapper isOdd={isOdd}>
    <Container direction="row">
      <Preview bgHsl={bgHsl} title={title} imgName={imgName} />

      <Content>
        <Title>{title}</Title>
        <Headline>{headline}</Headline>
      </Content>
    </Container>
  </Wrapper>
);

export default Project;
