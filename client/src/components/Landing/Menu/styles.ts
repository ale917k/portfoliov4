import { theme } from "globalStyles";
import styled from "styled-components";

export const Ul = styled.ul`
  position: absolute;
  bottom: 7%;
  right: 4%;
  text-align: right;
  list-style: none;
`;

export const Li = styled.li`
  line-height: 1.8;

  a {
    color: ${theme.palette.text};
    text-decoration: none;
  }
`;
