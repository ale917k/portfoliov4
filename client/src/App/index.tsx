import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import { animated, useTransition } from "react-spring";
import Cursor from "App/Cursor";
import HomePage from "components/HomePage";
import ProjectPage from "components/ProjectPage";
import { Wrapper } from "./styles";

const sleep = (t: number) => new Promise((res) => setTimeout(res, t));

/**
 * Container for all sections of the App.
 * @returns App Sections.
 */
const App: React.FC = () => {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translate3d(100vw, 0, 0)" },
    enter: () => async (next) => {
      await sleep(500);
      window.scrollTo(0, 0);
      await next({ opacity: 1, transform: "translate3d(0, 0, 0)" });
    },
    leave: { opacity: 0, transform: "translate3d(-20vw, 0, 0)" },
  });

  const initializeReactGA = () => {
    ReactGA.initialize("UA-179205326-1");
    ReactGA.pageview("/homepage");
  };

  useEffect(() => {
    initializeReactGA();
  }, []);

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
