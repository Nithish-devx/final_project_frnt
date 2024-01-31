import React, { useState } from 'react';
import '..//assets/css/Sidebar.css'



const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      
    
      <li><a href="/" >Home</a></li>
      <li><a href="/Edit" >courses</a></li>
      <li><a href="/Staffregister" >StaffLogin</a></li>
    
       
    </aside>
  );
};

export default Sidebar;
