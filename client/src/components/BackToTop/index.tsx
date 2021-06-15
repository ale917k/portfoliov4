import React from "react";
import { Wrapper, ScrollableArea, StyledLink } from "./styles";

const BackToTop: React.FC = () => (
  <Wrapper>
    <ScrollableArea>
      <StyledLink href="#landing" data-cursor="arrow-top">
        <img src="images/icons/chevron-top.svg" alt="Back to top" />
      </StyledLink>
    </ScrollableArea>
  </Wrapper>
);

export default BackToTop;
