import React from "react";
import { Ul, Li } from "./styles";

/**
 * Navigation menu displayed on Landing section.
 * @returns Navigation items bringing to related sections.
 */
const Menu: React.FC = () => {
  return (
    <Ul>
      <Li>
        <a href="#work">Work</a>
      </Li>
      <Li>
        <a href="#about">About</a>
      </Li>
      <Li>
        <a href="#contact">Contact</a>
      </Li>
    </Ul>
  );
};

export default Menu;
