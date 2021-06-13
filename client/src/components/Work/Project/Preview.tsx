import React, { useRef } from "react";
import { useSpring, to } from "react-spring";
import { PreviewWrapper, PreviewImg, StyledLink } from "./styles";

type Props = {
  bgHsl: number[];
  title: string;
  imgName: string;
};

// Spring settings
const calc = (x: number, y: number, rect: DOMRect) => [
  -(y - rect.top - rect.height / 2) / 100,
  (x - rect.left - rect.width / 2) / 100,
  1.05,
];
const trans = (x: number, y: number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const updatedConfig = {
  mass: 1,
  tension: 170,
  friction: 26,
  clamp: false,
  precision: 0.01,
  velocity: 0,
};

const isTouchDevice = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

const Preview: React.FC<Props> = ({ bgHsl, title, imgName }: Props) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], updatedConfig }));

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <PreviewWrapper
      ref={ref}
      onMouseMove={(e) => {
        if (ref?.current) {
          if (!isTouchDevice) {
            const rect = ref.current.getBoundingClientRect();
            set({ xys: calc(e.clientX, e.clientY, rect) });
          }
        }
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: to(props.xys, trans) }}
      $bgHsl={bgHsl}
      $imgName={imgName}
    >
      <StyledLink to={`/${title.replace(/\s+/g, "-").toLowerCase()}`} cursor-class="arrow">
        <PreviewImg src={`images/projects/preview/${imgName}.png`} alt="Project preview" />
      </StyledLink>
    </PreviewWrapper>
  );
};

export default Preview;
