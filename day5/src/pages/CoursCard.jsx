import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic6 from "../assets/images/pic6.jpeg"
import pic7 from "../assets/images/pic7.jpeg"
import pic8 from "../assets/images/pic8.jpeg"
import pic10 from "../assets/images/pic10.jpeg"
import pic11 from "../assets/images/pic11.jpeg"
import pic12 from "../assets/images/pic12.jpeg"
import pic13 from "../assets/images/pic13.jpeg"

import pic14 from "../assets/images/pic14.jpeg"
const CoursCard = ({ title, imageUrl, description }) => {

  const coursesData = [
    { title: 'CYBER SECURITY',  imageUrl:pic6, description: 'University Program' },
    { title: 'BUSINESS ANALYST', imageUrl:pic7, description: 'University Program' },
    { title: 'AI & MACHINE LEARNING', imageUrl: pic8, description: 'Master program' },
    { title: 'CLOUD COMPUTING', imageUrl: pic10, description: 'University Program' },
   

  ];
  const coursesData1 = [
    { title: 'DIGITAL MARKETING', imageUrl: pic11, description: 'Master program' },
    { title: 'DEVOPS', imageUrl: pic12, description: 'University Program' },
    { title: 'QUALITY MANAGEMENT', imageUrl: pic13, description: 'Master program' },
    { title: 'SOFTWARE DEVELOPMENT', imageUrl: pic14, description: 'Master program' },

  ];
  

  const navigate = useNavigate();

  const handleViewClick = () => {
    //console.log(View clicked for ${title});
    // Use the navigate function to navigate to a different page
    navigate('/data');
  };

  const handleBookClick = () => {
    navigate("/thankyou")
    //console.log(Book clicked for ${title});
  };

  return (
    <div>
    <div className="course-card" style={{display:"flex",flexWrap:"nowrap",width:"100%",padding:"2cm"}}>
     
      {coursesData.map((course, index) => (
        
        <div key={index}>
        <div className="card-top" style={{padding:"0.1cm",display:"flex",flexWrap:"nowrap"}}>
        <img src={course.imageUrl} alt={course.title} className="card-image" />
      </div>
        <div className="card-center">

<h3 className="card-title">{course.title}</h3>
<p className="card-description">{course.description}</p>
<div className="card-bottom">
        <button className="view-button" onClick={handleViewClick}>
          View
        </button>
        <button className="book-button" onClick={handleBookClick}>
          Book
        </button>
      </div>
</div>
        </div>
      ))}
     
      </div>
      <div className="course-card" style={{display:"flex",flexWrap:"nowrap",width:"100%",padding:"2cm"}}>
     
     {coursesData1.map((course, index) => (
       
       <div key={index}>
       <div className="card-top" style={{padding:"0.1cm",display:"flex",flexWrap:"nowrap"}}>
       <img src={course.imageUrl} alt={course.title} className="card-image" />
     </div>
       <div className="card-center">

<h3 className="card-title">{course.title}</h3>
<p className="card-description">{course.description}</p>
<div className="card-bottom">
       <button className="view-button" onClick={handleViewClick}>
         View
       </button>
       <button className="book-button" onClick={handleBookClick}>
         Book
       </button>
     </div>
</div>
       </div>
     ))}
    </div>
    </div>
  );
};

export default CoursCard;