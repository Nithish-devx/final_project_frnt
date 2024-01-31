import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";
import '..//assets/css/Navbar.css'
function Navbar()
{
    return (
        <nav>   
        <Logo/>
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/Contact">Contact</a>
            <a href="/login"> Login</a>
            <a href="/AdminPage">Admin</a>
            <a href="/Profile">Profile</a>
           


     </nav>   
    )
}
export default Navbar;