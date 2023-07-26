import React from 'react';

const CourseDetail = ({ match }) => {
  // Mock course data for demonstration purposes
  const courses = [
    { id: 1, title: 'Introduction to React', instructor: 'John Doe', description: 'Learn the basics of React.' },
    { id: 2, title: 'JavaScript Fundamentals', instructor: 'Jane Smith', description: 'Learn JavaScript from scratch.' },
    // Add more courses
  ];

  const courseId = parseInt(match.params.id);
  const course = courses.find((course) => course.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetail;
