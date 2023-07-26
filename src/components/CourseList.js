import React from 'react';

const CourseList = () => {
  // Mock course data for demonstration purposes
  const courses = [
    { id: 1, title: 'Introduction to React', instructor: 'John Doe' },
    { id: 2, title: 'JavaScript Fundamentals', instructor: 'Jane Smith' },
    // Add more courses
  ];

  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <a href={`/course/${course.id}`}>{course.title}</a> - Instructor: {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
