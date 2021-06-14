import React, { useState } from "react";
import Container from "components/Container";
import Headline from "components/Headline";
import Input from "components/Input";
import Button from "components/Button";
import { Wrapper, Title, Subtitle, Form, Copyright } from "./styles";

type ContactForm = {
  email: string;
  subject: string;
  message: string;
};

/**
 * Contact Section.
 * @returns Form sending emails to get in touch.
 */
const Contact: React.FC = () => {
  const year = new Date().getFullYear();

  const initialForm = {
    email: "",
    subject: "",
    message: "",
  };
  const [form, setForm] = useState<ContactForm>(initialForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    e.preventDefault();

    const { name, value } = e.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Wrapper id="contact">
      <Container>
        <Headline>Contact</Headline>

        <Title>Are you looking to craft something aesthetically modern?</Title>
        <Subtitle>Let's materialize your idea!</Subtitle>

        <Form>
          <Input
            id="email"
            type="email"
            name="email"
            label="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            id="subject"
            type="text"
            name="subject"
            label="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
          <Input
            id="message"
            type="textarea"
            name="message"
            label="Message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
          />
          <Button>Send message</Button>
        </Form>

        <Copyright>© {year}</Copyright>
      </Container>
    </Wrapper>
  );
};

export default Contact;
