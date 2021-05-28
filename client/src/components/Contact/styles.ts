import styled from "styled-components";
import { theme } from "globalStyles";

export const Wrapper = styled.div`
  & > * {
    align-items: center;
  }
`;

export const Title = styled.h3`
  max-width: 460px;
  text-align: center;
`;

export const Subtitle = styled.div`
  padding: ${theme.spacing(5)} 0;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Copyright = styled.p`
  padding: ${theme.spacing(20)} 0 ${theme.spacing(6)};
  color: ${theme.palette.grey[150]};
`;
