import React from "react";
import { StyledButton } from "./styles";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ type, onClick, children }: Props) => (
  <StyledButton type={type} onClick={onClick} data-cursor="arrow">
    {children}
  </StyledButton>
);

export default Button;
