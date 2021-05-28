import styled from "styled-components";
import { animated } from "react-spring";

export const SvgWrapper = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
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
