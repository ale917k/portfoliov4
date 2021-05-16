import styled from "styled-components";
import { theme } from "globalStyles";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, ${theme.palette.grey[50]} 0%, ${theme.palette.common.white} 100%);
`;

export const Caption = styled.h2`
  align-self: center;
  position: absolute;
  top: 15%;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Title = styled.h1`
  flex: 1;
  margin-right: -15%;
`;

export const Scroll = styled.span`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(0.5)};
  font-size: ${theme.typography.body.sm.fontSize};
  line-height: ${theme.typography.body.sm.lineHeight};
  text-align: center;
  text-transform: uppercase;

  &:after {
    content: "";
    width: 1px;
    height: 30px;
    background-color: ${theme.palette.common.black};
    margin: 0 auto;
  }
`;
