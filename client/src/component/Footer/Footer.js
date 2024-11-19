import React from "react";

import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <div className="footer-container">
      <p>&copy; {new Date().getFullYear()} Online Voting App. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
