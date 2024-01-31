// CourseCard.jsx

 import React from 'react';
import './UCourse.css';
import { useNavigate } from 'react-router-dom';

const UCourseCard = ({ title, imageUrl, description }) => {
    
   const  navigate=useNavigate();
  const handleViewClick = () => {
    //console.log(View clicked for ${title});
    navigate("/Data");
  };

  const handleBookClick = () => {
    //console.log(Book clicked for ${title});
    navigate("/Thankyou")
  };

  return (
    <div className="course-card">
      <div className="card-top">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
      <div className="card-center">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-bottom">
        <button className="view-button" onClick={handleViewClick}>
          View
        </button>
        <button className="book-button" onClick={handleBookClick}>
          Book
        </button>
      </div>
    </div>
  );
};

export default UCourseCard;