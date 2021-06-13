import React from "react";
import Landing from "components/Landing";
import Work from "components/Work";
import About from "components/About";
import Contact from "components/Contact";
import { Wrapper } from "./styles";

const HomePage: React.FC = () => (
  <Wrapper>
    <Landing />
    <Work />
    <About />
    <Contact />
  </Wrapper>
);

export default HomePage;
