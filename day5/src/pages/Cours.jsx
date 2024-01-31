import React from 'react';
import CoursCard from './CoursCard';
import "..//assets/css/Cour.css";
import pic6 from "../assets/images/pic6.jpeg"
import pic7 from "../assets/images/pic7.jpeg"
import pic8 from "../assets/images/pic8.jpeg"
import pic10 from "../assets/images/pic10.jpeg"
import pic11 from "../assets/images/pic11.jpeg"
import pic12 from "../assets/images/pic12.jpeg"
import pic13 from "../assets/images/pic13.jpeg"

import pic14 from "../assets/images/pic14.jpeg"



const Cours = () => {
  const coursesData = [
    { title: 'CYBER SECURITY',  imageUrl:pic6, description: 'University Program' },
    { title: 'BUSINESS ANALYST', imageUrl:pic7, description: 'University Program' },
    { title: 'AI & MACHINE LEARNING', imageUrl: pic8, description: 'Master program' },
    { title: 'CLOUD COMPUTING', imageUrl: pic10, description: 'University Program' },
    { title: 'DIGITAL MARKETING', imageUrl: pic11, description: 'Master program' },
    { title: 'DEVOPS', imageUrl: pic12, description: 'University Program' },
    { title: 'QUALITY MANAGEMENT', imageUrl: pic13, description: 'Master program' },
    { title: 'SOFTWARE DEVELOPMENT', imageUrl: pic14, description: 'Master program' },

  ];

  return (
    
    <div className="courses-container">
    <div className="sub-cont">
    <h1 style={{fontFamily:"Sego UI ,Tahoma,Geneva,Verdana,sans-serif",marginLeft:"11.5cm"}}>WORLD'S  #1  ONLINE  BOOTCAMP</h1>
    </div>
      {coursesData.map((course, index) => (
        <CoursCard key={index} {...course} />
      ))}
 
     
      
    </div>
  );
};

export default Cours;