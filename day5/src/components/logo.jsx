import React from 'react';
const logoimg="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/5001/s300/simplilearn-logo.jpg";
const Logo = () => {
  return (
    <div className="logo">
      {/* Your logo content or image */}
      <img src={logoimg} alt="Logo" style={{width:"60px",height:"60px",float:"left"}}/>
    </div>  );
};

export default Logo;