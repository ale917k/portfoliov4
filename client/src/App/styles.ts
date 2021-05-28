import styled from "styled-components";
import { theme } from "globalStyles";
import { StyledCursor } from "./Cursor/styles";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.palette.common.white};

  & > *:not(${StyledCursor}) {
    background-color: ${theme.palette.common.white};
  }
`;

export default Wrapper;
