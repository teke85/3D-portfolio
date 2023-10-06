import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const Section = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  scroll-snap-align: center;
  background-color: #fff3;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  border-bottom: 2px solid;
`;

const LeftColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`;

const RightColumn = styled.div`
  flex: 1;
  font-weight: 300;
`;

const SpanElement = styled.div`
  display: inline;
  color: #42c6f0;
  font-weight: 800;
`;

const Title = styled.h1`
  color: #42c6f0;
  font-size: 62px;
`;

const Input = styled.input`
  background-color: #e8e8e6;
  padding: 20px;
  width: 50%;
  height: 2vh;
  border: none;
  border-radius: 5px;
`;

const Form = styled.form`
  width: 60rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextArea = styled.div`
  background-color: #e8e8e6;
  padding: 20px;
  border: none;
  border-radius: 5px;
  color: #000;
  width: 50%;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1.8rem;
`;

const Button = styled.button`
  width: 10rem;
  height: 2rem;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData, // Template parameters
        'YOUR_USER_ID'
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Email could not be sent:', error);
      });
  };

  return (
    <Section>
      <Container>
        <LeftColumn>
          <Title>Lets work together</Title>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <label>Name:</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </InputContainer>
            <InputContainer>
              <label>Email:</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </InputContainer>
            <InputContainer>
              <label>Message:</label>
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={10}
              />
            </InputContainer>
            <Button type="submit">Submit</Button>
          </Form>
        </LeftColumn>
        <RightColumn></RightColumn>
      </Container>
    </Section>
  );
};

export default ContactForm;
