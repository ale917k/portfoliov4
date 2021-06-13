import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import projects from "data/projects.json";
import Container from "components/Container";
import PageNotFound from "components/PageNotFound";
import ProjectBrief from "./ProjectBrief";
import Palette from "./Palette";
import Typography from "./Typography";
import ProjectPages from "./ProjectPages";
import { Wrapper, ProjectCover, CoverImg, RespImgWrapper, RespImgBg, RespImg } from "./styles";

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

  // Filter projects with the one whose title matches url param (format with dash instead of space, e.g. "project-title")
  const activeProject: ProjectType = projects.filter(
    (project) => project.title.replace(/\s+/g, "-").toLowerCase() === projectName,
  )[0];

  const { title, bgHsl, imgName, year, concept, deliverables, palette, pagesImages } = activeProject || {};

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
            <CoverImg src={`images/projects/cover/${imgName}.png`} />
          </ProjectCover>

          <ProjectBrief title={title} year={year} concept={concept} deliverables={deliverables} />

          <RespImgWrapper>
            <RespImgBg />
            <RespImg src={`images/projects/responsive/${imgName}.png`} alt="Project responsiveness" />
          </RespImgWrapper>

          <Container height="auto">
            <Palette palette={palette} />
            <Typography imgName={imgName} />
          </Container>

          <ProjectPages pagesImages={pagesImages} />
        </Wrapper>
      ) : (
        <PageNotFound />
      )}
    </>
  );
};

export default ProjectPage;
