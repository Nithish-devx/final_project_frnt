import React, { useState } from 'react';
import CourseCard from './CourseCard';
import "../assets/css/Courses.css";
import smc from '../assets/images/pic1.png';
import cc from '../assets/images/pic2.png';
import ai from '../assets/images/pic3.png';
import pic6 from "../assets/images/pic6.jpeg"
import pic7 from "../assets/images/pic7.jpeg"
import pic8 from "../assets/images/pic8.jpeg"
import pic9 from "../assets/images/pic9.jpeg"
import pic11 from "../assets/images/pic11.jpeg"
import pic12 from "../assets/images/pic12.jpeg"
import pic13 from "../assets/images/pic13.jpeg"
import pic14 from "../assets/images/pic14.jpeg"

const Courses = () => {
  const [coursesData, setCoursesData] = useState([
    { id: 1, title: 'Cyber Security', imageUrl: pic6, description: 'University Certification' },
    { id: 2, title: 'Business Analyst', imageUrl: pic7, description: 'Master Certification' },
    { id: 3, title: 'Machine Learning', imageUrl: pic8, description: 'University Certification' },
    { id: 4, title: 'Cloud Computing', imageUrl: pic9, description: 'University Certification' },
    { id: 5, title: 'Digital Marketing', imageUrl: pic11, description: 'Master Certification' },
    { id: 6, title: ' DevOps', imageUrl: pic12, description: 'University Certification' },
    { id: 7, title: 'Qulaity Management', imageUrl: pic13, description: 'University Certification' },
   // { id: 8, title: 'Software Development', imageUrl: pic14, description: 'University Certification' },
  ]);

  const addCourse = () => {
    const newCourse = {
      id: Date.now(),
      title: 'New Course',
      imageUrl: '',
      description: 'New Description',
    };

    setCoursesData([...coursesData, newCourse]);
  };

  const updateCourse = (id, updatedCourse) => {
    setCoursesData((prevCourses) =>
      prevCourses.map((course) => (course.id === id ? { ...course, ...updatedCourse } : course))
    );
  };

  const deleteCourse = (id) => {
    setCoursesData((prevCourses) => prevCourses.filter((course) => course.id !== id));
  };

  return (
    <div className="courses-container">
      {coursesData.map((course) => (
        <CourseCard
          key={course.id}
          {...course}
          onUpdate={(updatedCourse) => updateCourse(course.id, updatedCourse)}
          onDelete={() => deleteCourse(course.id)}
        />
      ))}

      <button onClick={addCourse}>Add Course</button>
    </div>
  );
};

export default Courses;