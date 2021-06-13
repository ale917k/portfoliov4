import styled from "styled-components";
import { animated } from "react-spring";
import { theme } from "globalStyles";

export const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: min(100%, 100vh);

  &:after {
    content: "";
    display: block;
    width: 100%;
    padding-bottom: 57.25%;
  }

  ${theme.breakpoints.desktop} {
    max-width: 500px;
  }
`;

export const AnimatedWrapper = styled(animated.div)`
  position: absolute;
  width: 100%;
`;

export const MouseMoveArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
