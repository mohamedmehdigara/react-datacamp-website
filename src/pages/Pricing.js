import React from 'react';

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h2>Learn the data skills you need to advance your career.</h2>
      <div className="plans-section">
        <div className="plan">
          <h3>Basic</h3>
          <p>Free</p>
          <p>First chapter of every course</p>
          <p>Access to the full course library (430+)</p>
          {/* Add other plan details here */}
        </div>
        <div className="plan">
          <h3>Premium</h3>
          <p>$6.17 /month</p>
          <p>Special price billed annually</p>
          <p>Access our full content library</p>
          {/* Add other plan details here */}
        </div>
        <div className="plan">
          <h3>Teams</h3>
          <p>$12.42 per user /month</p>
          <p>Special price billed annually</p>
          <p>Manage your group</p>
          {/* Add other plan details here */}
        </div>
        <div className="plan">
          <h3>Enterprise</h3>
          <p>Contact sales for pricing</p>
          <p>Everything in Teams plus:</p>
          <p>Personalized and adaptive learning paths for employees</p>
          {/* Add other plan details here */}
        </div>
      </div>
      
      {/* Add more sections and content for the remaining information */}
    </div>
  );
};

export default Pricing;
