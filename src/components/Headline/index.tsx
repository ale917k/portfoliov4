import React from "react";
import { StyledHeadline } from "./styles";

type Props = {
  alignItems?: AlignItems;
  children: React.ReactNode;
};

/**
 * Section headline.
 * @param {string} alignItems - Headline alignment, can be either flex-start | center | flex-end.
 * @param {ReactNode} children - Headline content.
 * @returns Styled headline.
 */
const Headline: React.FC<Props> = ({ alignItems, children }: Props) => {
  return <StyledHeadline alignItems={alignItems}>{children}</StyledHeadline>;
};

export default Headline;
