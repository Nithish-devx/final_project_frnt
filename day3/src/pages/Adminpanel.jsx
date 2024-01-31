
import Sidebar from "../components/sidebar";
import React, { useState } from "react";
// import Navbar from "../components/Navbar";
import "../assets/css/Navbar.css"
function Adminpanel()
{
   return(
    <nav>   
        
            <a href="/dashboard">Home</a>
            <a href="/Staffregister">Register</a>
            <a href="/Edit">Course</a>

     </nav>  
  
    );

 }
 export default Adminpanel;