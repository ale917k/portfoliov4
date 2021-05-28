import React, { useRef } from "react";
import { useSpring, to } from "react-spring";
import { PreviewWrapper } from "./styles";

type Props = {
  bg: string;
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

const Preview: React.FC<Props> = ({ bg }: Props) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], updatedConfig }));

  const ref = useRef<HTMLDivElement>(null);

  return (
    <PreviewWrapper
      ref={ref}
      onMouseMove={(e) => {
        if (ref?.current) {
          const rect = ref.current.getBoundingClientRect();
          set({ xys: calc(e.clientX, e.clientY, rect) });
        }
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: to(props.xys, trans) }}
      bg={bg}
    />
  );
};

// const Preview: React.FC<Props> = ({ bg }: Props) => {
//   const [props, set] = useSpring(() => ({ xys: [0, 0, 1], updatedConfig }));

//   const [open, setOpen] = useState(false);

//   const springApi = useSpringRef();
//   const { size, ...rest } = useSpring({
//     ref: springApi,
//     config: config.stiff,
//     to: {
//       size: open ? "100%" : "20%",
//       top: open ? 0 : 100,
//       left: open ? 0 : 100,
//     },
//   });

//   const ref = useRef<HTMLDivElement>(null);

//   useChain(open ? [springApi] : [springApi], [0, open ? 0.1 : 0.6]);

//   return (
//     <PreviewWrapper
//       ref={ref}
//       onMouseMove={(e) => {
//         if (ref?.current && !open) {
//           const rect = ref.current.getBoundingClientRect();
//           set({ xys: calc(e.clientX, e.clientY, rect) });
//         }
//       }}
//       onMouseLeave={() => !open && set({ xys: [0, 0, 1] })}
//       onClick={() => {
//         set({ xys: [0, 0, 1] });
//         setOpen((prevState) => !prevState);
//       }}
//       style={{ ...rest, transform: to(props.xys, trans), width: size, height: size }}
//     >
//       <PreviewImg bg={bg} />
//     </PreviewWrapper>
//   );
// };

export default Preview;
