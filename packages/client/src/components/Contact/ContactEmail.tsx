import React from "react";
import { Email, Item } from "react-html-email";

type Props = {
  email: string;
  subject: string;
  message: string;
};

const ContactEmail: React.FC<Props> = ({ email, subject, message }: Props) => (
  <Email title="Portfolio Email!">
    <Item>Heeyy, you just received an email from the Portfolio!</Item>
    <Item>Email: {email}</Item>
    <Item>Subject: {subject}</Item>
    <Item>Message: {message}</Item>
  </Email>
);

export default ContactEmail;
