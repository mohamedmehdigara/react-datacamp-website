import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo">
            DataCamp
          </Link>
          <span className="we-are-hiring">We are hiring</span>
        </div>
        <nav className="header-middle">
          <ul>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/business">Business</Link></li>
            <li><Link to="/universities">Universities</Link></li>
          </ul>
        </nav>
        <div className="header-right">
          <input type="text" placeholder="Search" />
          <button className="sign-in-button">Sign in</button>
          <button className="get-started-button">Get started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
