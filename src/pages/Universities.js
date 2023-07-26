import React from 'react';

const Universities = () => {
  return (
    <div className="universities-container">
      <h2>DataCamp for Universities</h2>
      <p>DataCamp provides free access to its data science learning platform for educators and students.</p>

      <p>Apply below to create your free DataCamp Classroom</p>
      <p>For bespoke faculty and institution-wide plans, request a demo.</p>

      <img src="responsive-media-image.jpg" alt="Responsive Media" />

      <h3>LEADING UNIVERSITIES USE DATACAMP</h3>
      <div className="universities-logos">
        {/* Add images of universities logos here */}
        <img src="oxford-logo.png" alt="Oxford Logo" />
        <img src="ucd-logo.png" alt="UCD Logo" />
        <img src="kings-college-london-logo.png" alt="King's College London Logo" />
        {/* Add more university logos */}
      </div>

      <h3>DEEPEN DATA SCIENCE SKILLS WITH HANDS-ON LEARNING</h3>
      <p>Enhance your curriculum</p>
      <p>DataCamp’s interactive approach enables professors to supplement teaching and students to fast-track their learning with in-demand data skills.</p>

      <p>Active courses</p>
      <p>Empower students to build confidence with 400+ hands-on courses in Python, SQL, R, Power BI, Excel, and more.</p>

      <p>World-class content</p>
      <p>From in-demand career tracks to interactive projects, connect students with content curated by leaders at the forefront of the data revolution.</p>

      <p>Industry-leading certifications</p>
      <p>Strengthen CVs with Forbes’ #1 ranked certification program and challenge students to prove they are job-ready.</p>

      <img src="certification-responsive-media-image.jpg" alt="Certification Media" />

      {/* Add more content and sections for the remaining information */}
    </div>
  );
};

export default Universities;
