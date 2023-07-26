import React from 'react';

const UserProfile = () => {
  // Mock user data for demonstration purposes
  const user = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    // Add more user profile information
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add more user profile information */}
    </div>
  );
};

export default UserProfile;
