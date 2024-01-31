import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Login from "./pages/Login";
import Navbar from "./components/NavBar";
import AdminPage from "./pages/AdminPage";
import StaffLogin from "./pages/StaffLogin";
import UserLogin from "./pages/UserLogin";
import Signup from "./pages/SignUp";
import Courses from "./pages/Courses";
import Data from "./pages/data";
import Adminpanel from "./pages/Adminpanel";
import Edit from "./pages/Edit";
import Staffregister from "./pages/Staffregister";
import Profile from "./pages/Profile";
import Thankyou from "./pages/Thankyou";
import Dashboard from "./pages/Dashboard";
import Cours from "./pages/Cours";
import CoursCard from "./pages/CoursCard";
import UCourses from "./User/UCourses";
function App() {
  const courses = [
    { id: 1, title: 'Course 1', description: 'Description for Course 1', duration: '2 weeks' },
    { id: 2, title: 'Course 2', description: 'Description for Course 2', duration: '4 weeks' },
    // Add more courses as needed
  ];

  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/stafflogin" element={<StaffLogin />} />
        <Route path="/thankyou" element={<Thankyou/>}/>
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/data" element={<Data/>}/>
        <Route path="/Admin" element={<Adminpanel />}/>
        <Route path="/Edit" element={<Courses/>}/>
        <Route path="/Staffregister" element={<Staffregister/>}/>
        <Route path="/Profile"element={<Profile/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/cours" element={<CoursCard/>}/>
        <Route path="/UCourses" element={<UCourses/>}/>
      </Routes>
    </Router>
  );
}

export default App;
