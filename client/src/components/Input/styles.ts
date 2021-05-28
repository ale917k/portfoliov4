import { theme } from "globalStyles";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 1rem;
`;

const sharedInputStyles = css`
  width: 100%;
  font-size: 0.833rem;
  outline: none;
  border: 1px solid ${theme.palette.grey[150]};
  border-radius: 5px;
  padding: 1rem 0.7rem;
  transition: all ${theme.transitions.duration.short} ${theme.transitions.easing.easeInOut};

  &:hover {
    border-color: ${theme.palette.common.black};
  }

  &:focus {
    border-color: ${theme.palette.primary};

    & + label {
      color: ${theme.palette.primary};
      top: 1px;
      transform: translateY(-50%) scale(0.9);

      &:before {
        content: "";
      }
    }
  }

  &:not(:placeholder-shown) {
    & + label {
      top: 1px;
      transform: translateY(-50%) scale(0.9);

      &:before {
        content: "";
      }
    }
  }
`;
export const StyledInput = styled.input`
  ${sharedInputStyles};
  height: 3rem;
`;
export const StyledTextArea = styled.textarea`
  ${sharedInputStyles}
`;

export const Label = styled.label`
  position: absolute;
  font-size: 1rem;
  left: 0;
  top: ${theme.spacing(3)};
  transform: translateY(-50%);
  color: ${theme.palette.grey[150]};
  padding: 0 0.3rem;
  margin: 0 0.5rem;
  transition: 0.1s ease-out;
  transform-origin: left top;
  pointer-events: none;
  text-transform: capitalize;

  &:before {
    display: block;
    width: 100%;
    height: 10px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${theme.palette.common.white};
    z-index: -1;
  }
`;