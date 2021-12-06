import React, { useState } from "react";
import { renderEmail } from "react-html-email";
import Container from "components/Container";
import Headline from "components/Headline";
import Input from "components/Input";
import Button from "components/Button";
import Spinner from "components/Spinner";
import ContactEmail from "./ContactEmail";
import Alert from "./Alert";
import { Wrapper, Title, Subtitle, Form, Copyright } from "./styles";

type FormType = {
  email: string;
  subject: string;
  message: string;
};

type AlertType = {
  isActive: boolean;
  severity: "success" | "error" | "";
  message: React.ReactNode;
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
  const [form, setForm] = useState<FormType>(initialForm);

  // Alert message used for displaying error messages in case of server errors
  const initialAlertMessage = {
    isActive: false,
    severity: "",
    message: "",
  } as AlertType;
  const [alertMessage, setAlertMessage] = useState<AlertType>(initialAlertMessage);

  // Check if form request has been sent so to trigger spinner while waiting response
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    e.preventDefault();

    const { name, value } = e.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setAlertMessage(initialAlertMessage);
  };

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const messageHtml = renderEmail(<ContactEmail {...form} />);

    try {
      const data = await fetch("https://hfeysfkvlc.execute-api.eu-west-2.amazonaws.com/Production/send-email", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          messageHtml,
        }),
      });

      const isEmailSent = await data.json();
      if (!isEmailSent?.error) {
        setAlertMessage({
          isActive: true,
          severity: "success",
          message: "Message successfully sent. Thank you for reaching out, I will be back to you asap!",
        });
        setForm(initialForm);
        setIsLoading(false);
      } else {
        setAlertMessage({
          isActive: true,
          severity: "error",
          message: "Ooops, something went wrong. Please try again or reach me out at 07380 404 540",
        });
        setIsLoading(false);
      }
    } catch (err) {
      setAlertMessage({
        isActive: true,
        severity: "error",
        message: "Ooops, something went wrong. Please try again or reach me out at 07380 404 540",
      });
      setIsLoading(false);
    }
  };

  return (
    <Wrapper id="contact">
      <Container>
        <Headline>Contact</Headline>

        <Title>Are you looking to craft something aesthetically modern?</Title>
        <Subtitle>Let’s make your idea a reality!</Subtitle>

        <Form onSubmit={sendMessage}>
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
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Spinner /> : "Send message"}
          </Button>

          {alertMessage.isActive && <Alert severity={alertMessage.severity} message={alertMessage.message} />}
        </Form>

        <Copyright>© {year}</Copyright>
      </Container>
    </Wrapper>
  );
};

export default Contact;
