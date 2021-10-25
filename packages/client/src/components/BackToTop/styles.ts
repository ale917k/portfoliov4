import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { theme } from "globalStyles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 100vh;
  left: 0;
  width: 100%;
  height: calc(100% - 100vh);
  pointer-events: none;
`;

export const ScrollableArea = styled.div`
  padding: 5% 2.8%;
`;

export const StyledLink = styled(AnchorLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: ${theme.spacing(4)};
  right: ${theme.spacing(4)};
  width: ${theme.spacing(8)};
  height: ${theme.spacing(8)};
  background: ${theme.palette.common.white};
  border-radius: 50%;
  box-shadow: ${theme.shadows[1]};
  z-index: 10;
  pointer-events: all;

  ${theme.breakpoints.desktop} {
    display: none;
  }
`;
