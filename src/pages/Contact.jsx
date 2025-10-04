import React, { useState } from "react";
import styled from "styled-components";

const ContactWrapper = styled.div`
  min-height: 100vh;
  background: #0A1015;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 20px;
  color: #E0FFE7;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-family: 'Orbitron', sans-serif;
  color: #e0ffe7;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  max-width: 1100px;
  width: 100%;
`;

const FormSection = styled.form`
  flex: 1 1 400px;
  background: rgba(10, 16, 21, 0.95);
  border-radius: 1.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #30A9FF;
  font-weight: 600;
  margin-bottom: 0.4rem;
`;

const Input = styled.input`
  background: #111A22;
  border: 1px solid #30A9FF;
  border-radius: 0.5rem;
  padding: 0.7rem;
  color: #E0FFE7;
  margin-bottom: 1rem;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #43D27F;
  }
`;

const TextArea = styled.textarea`
  background: #111A22;
  border: 1px solid #30A9FF;
  border-radius: 0.5rem;
  padding: 0.7rem;
  color: #E0FFE7;
  margin-bottom: 1rem;
  font-size: 1rem;
  resize: none;
  min-height: 120px;
  &:focus {
    outline: none;
    border-color: #43D27F;
  }
`;

const Button = styled.button`
  background: linear-gradient(90deg, #30A9FF 60%, #43D27F 100%);
  border: none;
  border-radius: 2em;
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.8em 1.2em;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(90deg, #43D27F 60%, #30A9FF 100%);
  }
`;

const InfoSection = styled.div`
  flex: 1 1 400px;
  background: rgba(10, 16, 21, 0.95);
  border-radius: 1.5rem;
  padding: 2rem;
  color: #B8B8B8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoTitle = styled.h2`
  color: #43D27F;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  font-size: 1rem;
  margin-bottom: 0.8rem;
  text-align: center;
`;

const MapContainer = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  iframe {
    width: 100%;
    height: 300px;
    border: none;
    border-radius: 1rem;
  }
`;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
      <ContactWrapper>
        <Title>Contact Us</Title>
        <ContactContainer>
          <FormSection onSubmit={handleSubmit}>
            {!submitted ? (
              <>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" name="firstName" required />

                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" required />

                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" required />

                <Label htmlFor="message">Message</Label>
                <TextArea id="message" name="message" required />

                <Button type="submit">Send Message</Button>
              </>
            ) : (
              <h2 style={{ color: "#43D27F", textAlign: "center" }}>
                ✅ Thank you for your message!
              </h2>
            )}
          </FormSection>

          <InfoSection>
            <InfoTitle>SmartBike Company</InfoTitle>
            <InfoText>📍 123 Avenue du Vélo Intelligent, 75012 Paris, France</InfoText>
            <InfoText>📞 +33 1 42 68 90 12</InfoText>
            <InfoText>✉️ contact@smartbike.com</InfoText>
            <InfoText>🕓 Open Monday to Saturday, 9:00 - 18:30</InfoText>

            <MapContainer>
              <iframe
                title="SmartBike Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.314520167138!2d2.366678976367477!3d48.789648105541865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6730074036143%3A0xe183762a18baa175!2sEfrei%20Paris%20Panth%C3%A9on-Assas%20Universit%C3%A9%20-%20Campus%20La%20Factory!5e1!3m2!1sfr!2sfr!4v1759305212631!5m2!1sfr!2sfr"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </MapContainer>
          </InfoSection>
        </ContactContainer>
      </ContactWrapper>
  );
}

export default ContactPage;
