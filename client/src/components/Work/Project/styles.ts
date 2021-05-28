import styled from "styled-components";
import { animated } from "react-spring";
import { theme } from "globalStyles";

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
`;

export const Headline = styled.p`
  max-width: 55%;
  ${theme.typography.body.lg};
  color: ${theme.palette.grey[150]};
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: ${theme.spacing(22)};

  &:nth-child(odd) {
    & > * {
      flex-direction: row-reverse;
    }
  }

  &:nth-child(even) {
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
    width: 100%;
    height: 50%;
    background: ${theme.palette.grey[50]};
    border-radius: ${theme.shape.borderRadius};
  }
`;

// Preview.tsx
export const PreviewWrapper = styled(animated.div)<{ bg: string }>`
  flex: 1;
  background: ${(props) => props.bg};
  border-radius: ${theme.shape.borderRadius};
  z-index: 1;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;
