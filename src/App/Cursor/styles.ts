import styled from "styled-components";
import { theme } from "globalStyles";

export const Circle = styled.div`
  @media (hover: hover) and (pointer: fine) {
    width: 64px;
    height: 64px;
    margin-top: -50%;
    margin-left: -50%;
    border-radius: 50%;
    border: solid 1px rgba(227, 222, 193, 0.64);
    transition: opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.3s cubic-bezier(0.25, 1, 0.5, 1),
      border-color 0.3s cubic-bezier(0.25, 1, 0.5, 1), width 0.3s cubic-bezier(0.25, 1, 0.5, 1),
      height 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  }
`;

export const StyledCursor = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  will-change: transform;
  mix-blend-mode: difference;
  z-index: 99;
  transition-property: opacity, width, height;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);

  @media (hover: hover) and (pointer: fine) {
    &.arrow {
      &:after {
        content: "";
        position: absolute;
        left: -50%;
        top: -50%;
        width: 100%;
        height: 100%;
        background-image: url("https://svgshare.com/i/MzQ.svg");
        background-repeat: no-repeat;
        background-position: center;
      }

      ${Circle} {
        width: 128px;
        height: 128px;
        background-color: ${theme.palette.primary};
        border-color: ${theme.palette.primary};
      }
    }
  }
`;
