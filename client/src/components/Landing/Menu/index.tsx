import React from "react";
import { Ul, Li } from "./styles";

/**
 * Navigation menu displayed on Landing section.
 * @returns Navigation items bringing to related sections.
 */
const Menu: React.FC = () => (
  <Ul>
    <Li>
      <a href="#work" cursor-class="arrow">
        Work
      </a>
    </Li>
    <Li>
      <a href="#about" cursor-class="arrow">
        About
      </a>
    </Li>
    <Li>
      <a href="#contact" cursor-class="arrow">
        Contact
      </a>
    </Li>
  </Ul>
);

export default Menu;
