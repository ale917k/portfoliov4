import React from "react";
import { Wrapper } from "./styles";

type Props = {
  children: React.ReactNode;
  direction?: "row" | "column";
};

/**
 * Container wrapper for keeping content within theme sizes.
 * @param {ReactNode} children - Container children.
 * @returns Wrapped children.
 */
const Container: React.FC<Props> = ({ children, direction }: Props) => {
  return <Wrapper direction={direction}>{children}</Wrapper>;
};

export default Container;
