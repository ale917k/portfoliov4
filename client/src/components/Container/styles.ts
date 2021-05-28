import styled from "styled-components";
import { theme } from "globalStyles";

export const Wrapper = styled.div<{ direction?: "row" | "column" }>`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 0 ${theme.spacing(3)};
`;

export default Wrapper;
