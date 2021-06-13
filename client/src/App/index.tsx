import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import Cursor from "App/Cursor";
import HomePage from "components/HomePage";
import ProjectPage from "components/ProjectPage";

import { Wrapper } from "./styles";

/**
 * Container for all sections of the App.
 * @returns App Sections.
 */
const App: React.FC = () => {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <Wrapper>
      <Cursor />

      {transitions((props, item) => (
        <animated.div style={props}>
          <Switch location={item}>
            <Route path="/" exact component={HomePage} />
            <Route path="/:projectName" exact component={ProjectPage} />
          </Switch>
        </animated.div>
      ))}
    </Wrapper>
  );
};

export default App;
