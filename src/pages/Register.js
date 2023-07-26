import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  // State to store user input
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  // State to store registration success or error message
  const [registrationMessage, setRegistrationMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated registration logic with the mock API
    if (formData.password === formData.confirmPassword) {
      // Replace the above condition with an API call to register the user in the backend.
      // If registration is successful, show a success message or redirect the user to the login page.
      console.log('Registration successful');
      setRegistrationMessage('Registration successful! You can now login with your credentials.');
    } else {
      setRegistrationMessage('Password and Confirm Password must match.');
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
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
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        {registrationMessage && <div className="registration-message">{registrationMessage}</div>}
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
