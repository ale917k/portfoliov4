import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "globalStyles";

const constrainToPercentage = (value: number) => Math.min(Math.max(value, 0), 100);

// index.tsx
export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: ${theme.palette.common.white};
`;

export const ProjectCover = styled.div<{ bgHsl: number[] }>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70vh;
  background: ${(props) => `linear-gradient(to bottom, 
    hsl(${props.bgHsl[0]}, ${props.bgHsl[1]}%, ${constrainToPercentage(props.bgHsl[2] - 10)}%) 0%,
    hsl(${props.bgHsl[0]}, ${props.bgHsl[1]}%, ${props.bgHsl[2]}%) 80%)`};
  overflow: hidden;
`;

export const CoverImg = styled.img`
  height: 100%;
`;

export const RespImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const RespImgBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${theme.palette.grey[50]};
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0% 100%);
`;

export const RespImg = styled.img`
  min-width: min(1000px, 150%);
  width: 100%;
  max-width: 1440px;
  padding: 5% 0;
  z-index: 1;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing(5)};
  position: absolute;
  width: 100%;
  transform: translateY(-50%);
`;

const circleButtonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50%;
  ${theme.typography.h2};
  font-size: 0.9rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${theme.palette.common.black};
  background-color: ${theme.palette.common.white};
`;

export const CircleButton = styled(Link)`
  ${circleButtonStyles};

  ${theme.breakpoints.tablet} {
    display: none;
  }
`;

// ProjectBrief.tsx
export const BriefWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  grid-column: span 2;
  padding: ${theme.spacing(16)} 0 ${theme.spacing(5)};
  text-align: center;
`;

export const BriefCircleButton = styled(Link)`
  ${circleButtonStyles};
  position: absolute;
  right: 0;

  ${theme.breakpoints.desktop} {
    display: none;
  }
`;

export const Year = styled.h2`
  grid-column: span 2;
  text-align: center;
`;

export const ConceptWrapper = styled.div`
  h2 {
    margin-bottom: ${theme.spacing(3)};
  }

  ${theme.breakpoints.phone} {
    grid-column: span 2;
  }
`;

export const Concept = styled.p`
  max-width: 550px;
  ${theme.typography.body.reg};
`;

export const TechnologiesWrapper = styled.div`
  margin-top: ${theme.spacing(13)};

  h2 {
    margin-bottom: ${theme.spacing(3)};
  }

  ${theme.breakpoints.phone} {
    grid-column: span 2;
    margin-top: 0;
  }
`;

export const Technology = styled.p`
  padding-bottom: ${theme.spacing(0.5)};
  ${theme.typography.body.reg};
  text-align: right;
  text-transform: uppercase;
`;

export const CodeLink = styled.a`
  color: ${theme.palette.common.black};
  font-weight: ${theme.typography.fontWeightBold};
`;

export const PaletteWrapper = styled.div`
  display: flex;
  position: relative;
`;

const coloursStyles = css`
  display: flex;
  gap: ${theme.spacing(2)};
  width: 60%;

  ${theme.breakpoints.tablet} {
    gap: ${theme.spacing(1)};
  }
`;

export const LeftColours = styled.div`
  ${coloursStyles};
  justify-content: flex-end;
  margin-right: -8%;
  padding-bottom: 20%;
  z-index: 1;
`;

export const RightColours = styled.div`
  ${coloursStyles};
  margin-left: -8%;
  padding-top: 20%;
`;

export const Colour = styled.div<{ bg: string; colourNumbers: number }>`
  width: ${(props) => 100 / props.colourNumbers}%;
  background: ${(props) => props.bg};
  border-radius: ${theme.shape.borderRadius};

  &:before {
    content: "";
    display: block;
    padding-bottom: 250%;
  }

  ${theme.breakpoints.phone} {
    border-radius: 4px;
  }
`;

// Typography.tsx
export const TypographyImg = styled.div<{ imgName: string }>`
  width: 100%;
  z-index: 1;

  ${theme.breakpoints.custom(768, true)} {
    background: ${(props) => `url(images/projects/typography/${props.imgName}-desktop.svg) center / contain no-repeat`};
    margin-bottom: -10%;
    padding-bottom: 31.75%;
  }

  ${theme.breakpoints.tablet} {
    background: ${(props) => `url(images/projects/typography/${props.imgName}-tablet.svg) center / contain no-repeat`};
    margin-bottom: -10%;
    padding-bottom: 49%;
  }

  ${theme.breakpoints.phone} {
    background: ${(props) => `url(images/projects/typography/${props.imgName}-phone.svg) center / contain no-repeat`};
    margin-bottom: -10%;
    padding-bottom: 66.5%;
  }
`;

// ProjectPages.tsx
export const Background = styled.div`
  background-color: ${theme.palette.grey[50]};
  clip-path: polygon(0 4%, 100% 0%, 100% 100%, 0% 100%);
`;

export const PagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35%;
`;

export const PageImg = styled.img`
  margin-bottom: 15%;
  border-radius: ${theme.shape.borderRadius};
  box-shadow: ${theme.shadows[2]};
`;
