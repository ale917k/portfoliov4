import styled, { css } from "styled-components";
import { theme } from "globalStyles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const imageStyles = css`
  opacity: 0;
  transition: opacity ${theme.transitions.duration.complex}ms ${theme.transitions.easing.easeInOut};
`;

export const Bg = styled.div`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  ${imageStyles};
`;

export const Img = styled.img`
  ${imageStyles};
`;
