import React from "react";
// import ReactGA from "react-ga";
import Cursor from "components/Cursor";
import Landing from "components/Landing";
import Work from "components/Work";
import About from "components/About";
import Contact from "components/Contact";
import { Wrapper } from "./styles";

/**
 * Container for all sections of the App.
 * @returns App Sections.
 */
const App: React.FC = () => (
  <Wrapper>
    <Cursor />

    <Landing />
    <Work />
    <About />
    <Contact />
  </Wrapper>
);

export default App;
