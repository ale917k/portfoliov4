import styled from "styled-components";
import { theme } from "globalStyles";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-height: ${theme.spacing(6)};
  border: 1px solid ${theme.palette.primary.dark};
  border-radius: ${theme.shape.borderRadius};
  padding: 1rem 1.3rem;
  ${theme.typography.body.reg};
  color: ${theme.palette.common.white};
  overflow: hidden;
  cursor: pointer;
  z-index: 0;

  &:hover {
    &:after {
      transform: translateX(0);
    }
  }

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &:before {
    background-color: ${theme.palette.primary.main};
  }

  &:after {
    background-color: ${theme.palette.primary.dark};
    transform: translateX(-100%);
    transition: transform ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut};
  }

  &:disabled {
    cursor: progress;

    &:before {
      background-color: ${theme.palette.primary.dark};
    }
  }
`;

export default StyledButton;
