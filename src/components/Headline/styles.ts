import styled from "styled-components";
import { theme } from "globalStyles";

export const StyledHeadline = styled.h2<{ alignItems?: AlignItems }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems || "center"};
  gap: ${theme.spacing(0.5)};
  margin: ${theme.spacing(18)} auto ${theme.spacing(14)};

  &:after {
    content: "";
    width: ${theme.spacing(5)};
    height: 1px;
    background-color: ${theme.palette.grey[150]};
  }
`;

export default StyledHeadline;
