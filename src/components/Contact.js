import React from "react";
import bg from "../assets/img_5.jpg";  // Import background image
import styled from "styled-components";

export default function Contact() {
  return (
    <ContactWrapper>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactForm>
        <FormLabel>
          Name
          <FormInput type="text" placeholder="Your Name" required />
        </FormLabel>
        <FormLabel>
          Email
          <FormInput type="email" placeholder="Your Email" required />
        </FormLabel>
        <FormLabel>
          Subject
          <FormInput type="text" placeholder="Subject" />
        </FormLabel>
        <FormLabel>
          Message
          <FormTextarea placeholder="Your Message" rows="4" required />
        </FormLabel>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f9f9f9;
  min-height: 80vh;
  background-image: url(${bg});  // Apply background image
  background-size: cover;  // Ensure the background covers the entire div
  background-position: center;  // Center the background
`;

const ContactTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #333;
  margin-bottom: 15px;
`;

const FormInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

const FormTextarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  outline: none;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #ff4500;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e03e00;
  }
`;
