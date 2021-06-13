import React from "react";
import Container from "components/Container";
import { Background, PagesWrapper, PageImg } from "./styles";

type Props = {
  pagesImages: string[];
};

const ProjectPages: React.FC<Props> = ({ pagesImages }: Props) => (
  <Background>
    <Container>
      <PagesWrapper>
        {pagesImages.map((pageImg) => (
          <PageImg key={pageImg} src={`images/projects/pages/${pageImg}.png`} alt="Project screenshot" lazy />
        ))}
      </PagesWrapper>
    </Container>
  </Background>
);

export default ProjectPages;
