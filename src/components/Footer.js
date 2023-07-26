import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          <div className="footer-section">
            <h3>Explore</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/blog">Blog</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="footer-section">
            <h3>For Business</h3>
            <ul>
              <li><a href="/enterprise">Enterprise</a></li>
              <li><a href="/teams">Teams</a></li>
              <li><a href="/academic">Academic</a></li>
              <li><a href="/government">Government</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="/download">Download</a></li>
              <li><a href="/content">Content</a></li>
              <li><a href="/careers">Careers</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/help">Help Center</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-social">
            {/* Add social media links, icons, etc. */}
            <a href="https://facebook.com/datacamp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/datacamp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/datacamp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="footer-info">
            {/* Add other details like copyright, terms of use, privacy policy, etc. */}
            <p>&copy; 2023 Your Company. All rights reserved.</p>
            <p><a href="/terms">Terms of Use</a> | <a href="/privacy">Privacy Policy</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
