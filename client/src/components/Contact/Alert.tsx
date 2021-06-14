import React from "react";
import { StyledAlert } from "./styles";

type Props = {
  severity: "success" | "error" | "";
  message: React.ReactNode;
};

/**
 * Alert message component.
 * @param {string} severity - Severity of alert message (success | error).
 * @param {string} message - Alert message to display.
 * @return - Alert message with appropriate styles.
 */
const Alert: React.FC<Props> = ({ severity = "error", message }: Props) => (
  <StyledAlert severity={severity}>{message}</StyledAlert>
);

export default Alert;
