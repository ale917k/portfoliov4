import styled from "styled-components";
import { theme } from "globalStyles";

export const Wrapper = styled.div`
  background-color: ${theme.palette.common.white};

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

export const StyledAlert = styled.div<{ severity: "success" | "error" | "" }>`
  padding: 1rem 2rem;
  ${theme.typography.body.reg};
  color: ${(props) => (props.severity === "success" ? theme.palette.alert.success : theme.palette.alert.error)};
  text-align: center;
  z-index: 0;
`;

export const Copyright = styled.p`
  padding: ${theme.spacing(20)} 0 ${theme.spacing(6)};
  color: ${theme.palette.grey[150]};
`;
