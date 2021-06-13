import React from "react";
import { Link } from "react-router-dom";
import { useSpring, to } from "react-spring";
import Container from "components/Container";
import { Wrapper, TextWrapper, Title, Text, Layer1, Layer2, Layer3, Layer4 } from "./styles";

const calc = (x: number, y: number) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x: number, y: number) => `translate3d(${x / 50}px,${y / 50}px,0)`;
const trans2 = (x: number, y: number) => `translate3d(${x / 30}px,${y / 30}px,0)`;
const trans3 = (x: number, y: number) => `translate3d(${x / 20}px,${y / 20}px,0)`;
const trans4 = (x: number, y: number) => `translate3d(${x / 12}px,${y / 12}px,0)`;

/**
 * Page shown on unhandled routes.
 * @returns Animated "lost in space" illustration.
 */
const PageNotFound: React.FC = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <Wrapper onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <Container>
        <TextWrapper>
          <Title>Aw, snap! This page is lost in space</Title>
          <Text>
            Let's go&nbsp;
            <Link to="/">home</Link>
          </Text>
        </TextWrapper>
      </Container>
      <Layer1 style={{ transform: to(props.xy, trans1) }} />
      <Layer2 style={{ transform: to(props.xy, trans2) }} />
      <Layer3 style={{ transform: to(props.xy, trans3) }} />
      <Layer4 style={{ transform: to(props.xy, trans4) }} />
    </Wrapper>
  );
};

export default PageNotFound;
