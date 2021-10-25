import React from "react";
import { Wrapper, StyledInput, StyledTextArea, Label } from "./styles";

type PropsType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  id: string;
  type: "email" | "text" | "textarea";
  name: string;
  label: string;
  value: string;
  rows?: number;
  required: boolean;
};

/**
 * Standard Input component, reusable for both Inputs and Textareas.
 * @param {Object} props - Props passed from parent component containing input attributes.
 * @return - Controlled input element.
 */
const Input: React.FC<PropsType> = ({ id, onChange, type, label, required, ...rest }: PropsType) => {
  // Check if value entered is a valid email. Ref: http://emailregex.com/
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

  // Updates handleChange parent function and checks for deep email validation
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { type: inputType, value } = event.target;
    onChange(event);

    if (inputType === "email" && !emailPattern.test(value)) {
      event.target.setCustomValidity("Please select a valid email address.");
    } else {
      event.target.setCustomValidity("");
    }
  };

  return (
    <Wrapper>
      {type === "textarea" ? (
        <StyledTextArea id={id} placeholder=" " required={required} {...rest} onChange={handleChange} />
      ) : (
        <StyledInput id={id} type={type} placeholder=" " required={required} {...rest} onChange={handleChange} />
      )}

      <Label htmlFor={id}>
        {label}
        {required && " *"}
      </Label>
    </Wrapper>
  );
};

export default Input;
