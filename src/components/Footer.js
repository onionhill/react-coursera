import React from "react";
import "../components/styles/Footer.css";

import Logo from "../components/assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src="/assets/Logo.svg" alt="logo"></img>
      </div>
      <div>Navigation</div>
      <div>Contact</div>
      <div>Social Media Links</div>
    </footer>
  );
}

export default Footer;
