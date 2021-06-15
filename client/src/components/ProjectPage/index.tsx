import React, { useEffect, useRef } from "react";
import { useRouteMatch } from "react-router-dom";
import projects from "data/projects.json";
import Container from "components/Container";
import Contact from "components/Contact";
import PageNotFound from "components/PageNotFound";
import ProjectBrief from "./ProjectBrief";
import Palette from "./Palette";
import Typography from "./Typography";
import ProjectPages from "./ProjectPages";
import {
  Wrapper,
  ProjectCover,
  CoverImg,
  RespImgWrapper,
  RespImgBg,
  RespImg,
  ButtonsWrapper,
  CircleButton,
} from "./styles";

type MatchParams = {
  projectName: string;
};

/**
 * Project page.
 * @param {object} match - React-router-dom match object.
 * @returns Dynamic content switching based on viewed route.
 */
const ProjectPage: React.FC = () => {
  const { projectName } = (useRouteMatch()?.params as MatchParams) || {};
  const nextProjectTitle = useRef<string>("");

  // Filter projects with the one whose title matches url param (format with dash instead of space, e.g. "project-title")
  const activeProject: ProjectType = projects.filter((project, index) => {
    const isActiveProject = project.title.replace(/\s+/g, "-").toLowerCase() === projectName;

    // Add next project title
    if (isActiveProject) {
      nextProjectTitle.current = projects[index + 1]?.title.replace(/\s+/g, "-").toLowerCase();
    }

    return isActiveProject;
  })[0];

  const { title, bgHsl, imgName, year, concept, technologies, codeUrl, palette, pagesImages } = activeProject || {};

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 800);
  }, []);

  return (
    <>
      {activeProject ? (
        <Wrapper>
          <ProjectCover bgHsl={bgHsl}>
            <CoverImg src={`images/projects/cover/${imgName}.png`} alt="Project cover" />
          </ProjectCover>

          <ProjectBrief title={title} year={year} concept={concept} technologies={technologies} codeUrl={codeUrl} />

          <RespImgWrapper>
            <RespImgBg />
            <RespImg src={`images/projects/responsive/${imgName}.png`} alt="Project responsiveness" />
          </RespImgWrapper>

          <Container height="auto">
            <Palette palette={palette} />
            <Typography imgName={imgName} />
          </Container>

          <ProjectPages pagesImages={pagesImages} />

          <ButtonsWrapper>
            <CircleButton to="/" data-cursor="arrow-left">
              Back
            </CircleButton>
            {nextProjectTitle.current && (
              <CircleButton to={`/${nextProjectTitle.current}`} data-cursor="arrow">
                Next
              </CircleButton>
            )}
          </ButtonsWrapper>

          <Contact />
        </Wrapper>
      ) : (
        <PageNotFound />
      )}
    </>
  );
};

export default ProjectPage;
