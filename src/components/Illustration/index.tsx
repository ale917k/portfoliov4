import React from "react";
import { useSpring, to } from "react-spring";
import Background from "./Background";
import Grid from "./Grid";
import Avatar from "./Avatar";
import Pc from "./Pc";
import Phone from "./Phone";
import { AnimatedWrapper, SvgWrapper, MouseMoveArea } from "./styles";

// Spring transitions
const bgTrans = (x: number, y: number) => `translate3d(${x / 50}px,${y / 50}px,0)`;
const gridTrans = (x: number, y: number) => `translate3d(${x / 30}px,${y / 30}px,0)`;
const avatarTrans = (x: number, y: number) => `translate3d(${x / 35}px,${y / 35}px,0)`;
const pcTrans = (x: number, y: number) => `translate3d(${x / 40}px,${y / 40}px,0)`;
const phoneTrans = (x: number, y: number) => `translate3d(${x / 35}px,${y / 35}px,0)`;
// const bgTrans = (x: number, y: number) => `translate3d(${x / 50}px,${y / 50}px,0)`;

/**
 * Svg animated on mouse move through react-string.
 * @returns Animated Svg.
 */
const Illustration: React.FC = () => {
  const [props, set] = useSpring<{ xy: number[] }>(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const calc = (x: number, y: number) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

  return (
    <>
      <SvgWrapper>
        <AnimatedWrapper style={{ transform: to(props.xy, bgTrans) }}>
          <Background />
        </AnimatedWrapper>

        <AnimatedWrapper style={{ transform: to(props.xy, gridTrans) }}>
          <Grid />
        </AnimatedWrapper>

        <AnimatedWrapper style={{ transform: to(props.xy, avatarTrans) }}>
          <Avatar />
        </AnimatedWrapper>

        <AnimatedWrapper style={{ transform: to(props.xy, pcTrans) }}>
          <Pc />
        </AnimatedWrapper>

        <AnimatedWrapper style={{ transform: to(props.xy, phoneTrans) }}>
          <Phone />
        </AnimatedWrapper>
      </SvgWrapper>

      <MouseMoveArea onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} />
    </>
  );
};

export default Illustration;

/* <animated.div style={{ transform: to(props.xy, trans) }}>
        <path
          id="BottomSquare2"
          fill={theme.palette.grey[100]}
          d="M651.651 359.256h-12.872a2.451 2.451 0 01-2.476-2.474v-12.866a2.451 2.451 0 012.476-2.475h12.872a2.451 2.451 0 012.476 2.475v12.866a2.451 2.451 0 01-2.476 2.474zm-12.872-16.825c-.842 0-1.486.643-1.486 1.485v12.866c0 .841.644 1.484 1.486 1.484h12.872c.842 0 1.486-.643 1.486-1.484v-12.866c0-.842-.644-1.485-1.486-1.485h-12.872z"
        />
      </animated.div> */

/* <path
        id="TopSquare"
        fill={theme.palette.grey[100]}
        d="M516.984 17.814h-12.873a2.45 2.45 0 01-2.475-2.474V2.474A2.45 2.45 0 01504.111 0h12.873a2.45 2.45 0 012.475 2.474V15.34a2.45 2.45 0 01-2.475 2.474zM504.111.99c-.841 0-1.485.643-1.485 1.484V15.34c0 .841.644 1.485 1.485 1.485h12.873c.841 0 1.485-.644 1.485-1.485V2.474c0-.841-.644-1.484-1.485-1.484h-12.873z"
      />
      <path
        id="BottomSquare1"
        fill={theme.palette.grey[100]}
        d="M643.73 352.823h-12.873a2.45 2.45 0 01-2.475-2.474v-12.866a2.451 2.451 0 012.475-2.475h12.873a2.451 2.451 0 012.475 2.475v12.866a2.45 2.45 0 01-2.475 2.474zm-12.873-16.825c-.841 0-1.485.643-1.485 1.485v12.866c0 .841.644 1.484 1.485 1.484h12.873c.842 0 1.485-.643 1.485-1.484v-12.866c0-.842-.643-1.485-1.485-1.485h-12.873z"
      />
      <path
        id="RightSquare2"
        fill={theme.palette.grey[100]}
        d="M647.938 134.3h-12.873a2.45 2.45 0 01-2.475-2.474V118.96a2.45 2.45 0 012.475-2.474h12.873a2.45 2.45 0 012.475 2.474v12.866a2.45 2.45 0 01-2.475 2.474zm-12.873-16.824c-.841 0-1.485.643-1.485 1.484v12.866a1.46 1.46 0 001.485 1.485h12.873c.842 0 1.485-.644 1.485-1.485V118.96c0-.841-.643-1.484-1.485-1.484h-12.873z"
      />
      <path
        id="RightSquare1"
        fill={theme.palette.grey[100]}
        d="M640.016 127.867h-12.873a2.45 2.45 0 01-2.475-2.474v-12.866a2.45 2.45 0 012.475-2.474h12.873a2.452 2.452 0 012.476 2.474v12.866a2.451 2.451 0 01-2.476 2.474zm-12.873-16.824c-.841 0-1.485.643-1.485 1.484v12.866a1.46 1.46 0 001.485 1.485h12.873c.842 0 1.485-.644 1.485-1.485v-12.866c0-.841-.643-1.484-1.485-1.484h-12.873z"
      /> */
