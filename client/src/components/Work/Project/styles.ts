import styled from "styled-components";
import { animated } from "react-spring";
import { Link } from "react-router-dom";
import { Wrapper as ContainerWrapper } from "components/Container/styles";
import { theme } from "globalStyles";

const constrainToPercentage = (value: number) => Math.min(Math.max(value, 0), 100);

// Preview.tsx
export const PreviewImg = styled.img`
  width: 90%;
  transform: translateZ(0);
  transition: transform ${theme.transitions.easing.easeInOut} ${theme.transitions.duration.complex}ms;
`;

export const PreviewWrapper = styled(animated.div)<{ $bgHsl: number[]; $imgName: string }>`
  flex: 1;
  background: ${(props) =>
    `linear-gradient(to top,
    hsl(${props.$bgHsl[0]}, ${props.$bgHsl[1]}%, ${constrainToPercentage(props.$bgHsl[2] - 10)}%) 0%,
    hsl(${props.$bgHsl[0]}, ${props.$bgHsl[1]}%, ${props.$bgHsl[2]}%) 80%)`};
  border-radius: ${theme.shape.borderRadius};
  z-index: 1;
  box-shadow: ${theme.shadows[8]};
  transition: box-shadow ${theme.transitions.easing.easeInOut} ${theme.transitions.duration.complex}ms;
  will-change: transform;
  cursor: pointer;

  &:hover {
    box-shadow: ${theme.shadows[24]};

    ${PreviewImg} {
      transform: translateZ(0) scale(1.4) rotate(15deg);
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

// index.tsx
export const Content = styled.div`
  flex: 1;
`;

export const Title = styled.h3`
  position: relative;
  margin-top: 18%;
  margin-bottom: ${theme.spacing(4)};
  ${theme.typography.h1};
  z-index: 1;

  ${theme.breakpoints.desktop} {
    margin-top: 10%;
  }
`;

export const Headline = styled.p`
  max-width: 20rem;
  ${theme.typography.body.lg};
  color: ${theme.palette.grey[150]};
`;

export const Wrapper = styled.div<{ isOdd: boolean }>`
  display: flex;
  position: relative;
  margin-bottom: ${theme.spacing(22)};
  z-index: 1;

  &:nth-child(${(props) => (props.isOdd ? "odd" : "even")}) {
    ${ContainerWrapper} {
      flex-direction: row-reverse;

      ${PreviewWrapper} {
        &:hover {
          ${PreviewImg} {
            transform: translateZ(0) scale(1.4) rotate(-15deg);
          }
        }
      }
    }
  }

  &:nth-child(${(props) => (props.isOdd ? "even" : "odd")}) {
    text-align: right;

    ${Headline} {
      margin-left: auto;
    }
  }

  &:last-of-type {
    margin-bottom: ${theme.spacing(6)};
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -${theme.spacing(6)};
    left: 0;
    right: 0;
    height: max(50%, ${theme.spacing(40)});
    background: ${theme.palette.grey[50]};
    border-radius: ${theme.shape.borderRadius};
    z-index: -1;
  }

  ${theme.breakpoints.desktop} {
    &:nth-child(n) {
      text-align: left;

      ${ContainerWrapper} {
        flex-direction: column;
        padding: 0;
      }

      ${Headline} {
        max-width: none;
        margin-left: 0;
      }

      &:after {
        left: -100%;
        right: -100%;
      }
    }
  }
`;
