import React from 'react';
import UCourseCard from './UCourseCard';
import './UCourse.css';
import pic6 from "../assets/images/pic6.jpeg"
import pic7 from "../assets/images/pic7.jpeg"
import pic8 from "../assets/images/pic8.jpeg"
import pic10 from "../assets/images/pic10.jpeg"
import pic11 from "../assets/images/pic11.jpeg"
import pic12 from "../assets/images/pic12.jpeg"
import pic13 from "../assets/images/pic13.jpeg"
import pic14 from "../assets/images/pic14.jpeg"
import Navbar from '../components/NavBar';

const UCourses = () => {
  // Assuming you have an array of courses data
  const coursesData = [
    { title: 'Cyber Security', imageUrl: pic6, description: 'University Certificate' },
    { title: 'Business Analyst', imageUrl: pic7, description: 'Master certifiacte' },
    { title: 'Machine Learning', imageUrl: pic8, description: 'Master certifiacte' },
    { title: 'Cloud Computing', imageUrl: pic10, description: 'University Certificate' },
    { title: 'Digital Marketing', imageUrl: pic11, description: 'Master University' },
    { title: 'DevOps', imageUrl: pic12, description: 'University Certificate' },
    { title: 'Quality Development', imageUrl: pic13, description: 'Master Certificate' },
    { title: 'Software Development', imageUrl: pic14, description: 'Master Certificate' },

    

  ];

  return (
    
    <div className="courses-container">
    
      {coursesData.map((course, index) => (
        <UCourseCard key={index} {...course} />
      ))}
      
    </div>
  );
};

export default UCourses;