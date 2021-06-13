import styled from "styled-components";
import { Wrapper as ContainerWrapper } from "components/Container/styles";
import { theme } from "globalStyles";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 100%;
  padding-bottom: ${theme.spacing(15)};
  background: linear-gradient(0deg, ${theme.palette.grey[50]} 0%, ${theme.palette.common.white} 100%);

  & > ${ContainerWrapper} {
    margin: auto;
  }
`;

export const Caption = styled.h2`
  padding-top: max(${theme.spacing(8)}, 10vmin);
  padding-bottom: ${theme.spacing(2)};
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${theme.breakpoints.desktop} {
    flex-direction: column;
    max-height: 60%;
  }
`;

export const Title = styled.h1`
  max-width: 38rem;
  margin-right: -10%;

  ${theme.breakpoints.desktop} {
    max-width: 35rem;
    margin-bottom: ${theme.spacing(3)};
    margin-right: 0;
    text-align: center;
  }
`;

export const Scroll = styled.span`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(0.5)};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
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
