import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background: #0A1015;
  color: #B8B8B8;
  padding: 2.5rem 1rem;
  border-top: 1px solid rgba(48, 169, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterTitle = styled.h3`
  color: #30A9FF;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
`;

const ContactInfo = styled.div`
  margin-bottom: 1.2rem;
  font-size: 1rem;
  line-height: 1.6;
`;

const Socials = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

const SocialIcon = styled.a`
  color: #43D27F;
  font-size: 1.5rem;
  transition: color 0.2s;
  &:hover {
    color: #30A9FF;
  }
`;

const Copy = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-top: 1.5rem;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterTitle>SmartBike</FooterTitle>
      <ContactInfo>
        123 Avenue du Vélo Intelligent, Paris, France <br />
        📞 +33 1 42 68 90 12 <br />
        ✉️ contact@smartbike.com
      </ContactInfo>
      <Socials>
        <SocialIcon href="#"><FaFacebook /></SocialIcon>
        <SocialIcon href="#"><FaInstagram /></SocialIcon>
        <SocialIcon href="#"><FaTwitter /></SocialIcon>
        <SocialIcon href="#"><FaLinkedin /></SocialIcon>
      </Socials>
      <Copy>© 2025 SmartBike. All rights reserved.</Copy>
    </FooterWrapper>
  );
}

export default Footer;
