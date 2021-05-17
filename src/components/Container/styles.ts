import styled from "styled-components";
import { theme } from "globalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 0 ${theme.spacing(3)};
`;

export default Wrapper;
