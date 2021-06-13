import styled, { css } from "styled-components";
import { animated } from "react-spring";
import { theme } from "globalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const TextWrapper = styled.div`
  margin: auto 0;
  padding-bottom: 25%;
  z-index: 1;
`;

export const Title = styled.h1`
  max-width: 600px;
  padding-bottom: ${theme.spacing(3)};
  color: ${theme.palette.grey[100]};
`;

export const Text = styled.h2`
  ${theme.typography.h4};
  color: ${theme.palette.grey[100]};

  a {
    color: ${theme.palette.grey[100]};
  }
`;

const layerStyles = css`
  position: absolute;
  left: -5%;
  right: -5%;
  background-repeat: no-repeat;
  background-position: center bottom;
  will-change: transform;
`;

export const Layer1 = styled(animated.div)`
  ${layerStyles};
  top: -5%;
  bottom: -5%;
  background-image: url(images/page-not-found/background.svg);
  background-position: center center;
  background-size: cover;
`;

export const Layer2 = styled(animated.div)`
  ${layerStyles};
  bottom: -5%;
  height: inherit;
  background-image: url(images/page-not-found/layer1.svg);
`;

export const Layer3 = styled(animated.div)`
  ${layerStyles};
  bottom: -5%;
  height: inherit;
  background-image: url(images/page-not-found/layer2.svg);
`;

export const Layer4 = styled(animated.div)`
  ${layerStyles};
  bottom: -5%;
  height: inherit;
  background-image: url(images/page-not-found/layer3.svg);
`;
