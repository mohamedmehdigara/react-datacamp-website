import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h2>404 Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <p>
        Go back to the <Link to="/">homepage</Link> or navigate to another page.
      </p>
    </div>
  );
};

export default NotFound;
