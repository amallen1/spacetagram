import React from "react";
import styled from "styled-components/macro";

const FooterSection = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #cfcfcf;
  font-weight: 700;
`;

const Footer = () => {
  return (
    <FooterSection>
      Brought to you by NASA's Astronomy Photo of the Day (APOD) API
    </FooterSection>
  );
};

export default Footer;
