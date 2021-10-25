import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Ul, Li } from "./styles";

/**
 * Navigation menu displayed on Landing section.
 * @returns Navigation items bringing to related sections.
 */
const Menu: React.FC = () => (
  <Ul>
    <Li>
      <AnchorLink href="#work" data-cursor="arrow-bottom">
        Work
      </AnchorLink>
    </Li>
    <Li>
      <AnchorLink href="#about" data-cursor="arrow-bottom">
        About
      </AnchorLink>
    </Li>
    <Li>
      <AnchorLink href="#contact" data-cursor="arrow-bottom">
        Contact
      </AnchorLink>
    </Li>
  </Ul>
);

export default Menu;
