import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  // State to store user input
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // State to store login error messages
  const [loginError, setLoginError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated login logic with the mock API
    if (formData.email === 'user@example.com' && formData.password === 'password') {
      // Replace the above condition with an API call to authenticate against the backend.
      // If login is successful, you can redirect the user to their profile page or the homepage.
      console.log('Login successful');
    } else {
      setLoginError('Invalid email or password');
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {loginError && <div className="error-message">{loginError}</div>}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
