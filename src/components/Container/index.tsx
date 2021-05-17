import React from "react";
import { Wrapper } from "./styles";

type Props = {
  children: React.ReactNode;
};

/**
 * Container wrapper for keeping content within theme sizes.
 * @param {ReactNode} children - Container children.
 * @returns Wrapped children.
 */
const Container: React.FC<Props> = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
