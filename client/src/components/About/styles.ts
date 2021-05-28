import styled from "styled-components";
import { theme } from "globalStyles";

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(15)};
`;

export const Biography = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  padding-bottom: ${theme.spacing(2)};
  ${theme.typography.body.lg};
  color: ${theme.palette.grey[150]};
`;

export const Paragraph = styled.div<{ cursive?: boolean }>`
  padding-bottom: ${theme.spacing(2)};
  font-style: ${(props) => (props.cursive ? "italic" : "normal")};
`;

export const Portrait = styled.img`
  flex: 1;
`;

export const SkillsWrapper = styled.div`
  width: 100%;
  margin-top: -${theme.spacing(10)};
  background: ${theme.palette.grey[50]};
  clip-path: polygon(0 20%, 100% 0%, 100% 100%, 0% 100%);

  h2 {
    margin-top: ${theme.spacing(22)};
  }
`;

export const SkillsImg = styled.img`
  width: 100%;
  padding-bottom: ${theme.spacing(20)};
`;
