import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

type Props = RouteComponentProps & {
  children: React.ReactNode;
};

const ScrollToTop: React.FC<Props> = ({ history, children }: Props) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      unlisten();
    };
  }, []);

  return <>{children}</>;
};

export default withRouter(ScrollToTop);
