import React from "react";
import { StyledButton } from "./styles";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, ...rest }: Props) => (
  <StyledButton data-cursor="arrow" {...rest}>
    {children}
  </StyledButton>
);

export default Button;
