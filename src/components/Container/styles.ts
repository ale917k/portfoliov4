import styled from "styled-components";
import { theme } from "globalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;

  ${theme.breakpoints.desktop} {
    max-width: 880px;
  }

  ${theme.breakpoints.tablet} {
    max-width: 720px;
  }

  ${theme.breakpoints.phone} {
    max-width: 540px;
  }
`;

export default Wrapper;
