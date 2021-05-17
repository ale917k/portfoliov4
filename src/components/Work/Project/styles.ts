import styled from "styled-components";
import { theme } from "globalStyles";

export const Preview = styled.div<{ bg: string }>`
  position: relative;
  flex: 1;
  background: ${(props) => props.bg};
  border-radius: ${theme.shape.borderRadius};
  z-index: 1;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const Content = styled.div`
  flex: 1;
  position: relative;

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

export const Title = styled.h3`
  position: relative;
  margin-top: 18%;
  margin-bottom: ${theme.spacing(4)};
  ${theme.typography.h1};
  color: ${theme.palette.common.white};
  mix-blend-mode: difference;
  z-index: 1;
`;

export const Headline = styled.p`
  max-width: 55%;
  ${theme.typography.body.lg};
  color: ${theme.palette.grey[150]};
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: ${theme.spacing(22)};

  &:nth-child(odd) {
    flex-direction: row-reverse;

    ${Content} {
      margin-right: -10%;
    }
  }

  &:nth-child(even) {
    text-align: right;

    ${Content} {
      margin-left: -10%;
    }

    ${Headline} {
      margin-left: auto;
    }
  }

  &:last-of-type {
    margin-bottom: ${theme.spacing(6)};
  }
`;
