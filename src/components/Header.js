import React from 'react';
import logo from '../assets/logo.png'; // Replace this with the path to your logo image

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="DataCamp Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/pricing">Pricing</a></li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search for courses" />
          <button>Search</button>
        </div>
        <div className="user-profile">
          {/* Assuming you have a user avatar image */}
          <img src="user-avatar.jpg" alt="User Avatar" />
          <span>John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
