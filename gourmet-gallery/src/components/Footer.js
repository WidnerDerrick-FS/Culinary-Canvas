// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling your footer

const Footer = () => {
  const year = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {year} Culinary Canvas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
