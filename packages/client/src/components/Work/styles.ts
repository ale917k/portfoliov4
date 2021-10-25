import styled from "styled-components";
import { theme } from "globalStyles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${theme.palette.common.white};
`;

export default Wrapper;
