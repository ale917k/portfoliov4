import React from "react";
import { Wrapper } from "./styles";

type Props = {
  children: React.ReactNode;
  direction?: "row" | "column";
  height?: string;
};

/**
 * Container wrapper for keeping content within theme sizes.
 * @param {ReactNode} children - Container children.
 * @param {string} direction - Wrapper flex direction.
 * @param {string} height - Custom height or default to 100%.
 * @returns Wrapped children.
 */
const Container: React.FC<Props> = ({ children, direction, height }: Props) => (
  <Wrapper direction={direction} height={height}>
    {children}
  </Wrapper>
);

export default Container;
