import React from 'react'
import dd from "../assets/images/dd.jpeg"
import dd2 from "../assets/images/dd2.jpeg"
import dd3 from "../assets/images/dd3.jpeg"
import dd4 from "../assets/images/dd4.jpeg"
import Adminpanel from './Adminpanel'
import dd5 from "../assets/images/dd5.jpeg"
import dd33 from "../assets/images/dd33.avif"
import dd22 from "../assets/images/dd22.avif"
import "../assets/css/Dashboard.css"
export default function Dashboard() {
  return (
    <div>
    <div>
      <Adminpanel/>
    </div>
    <div className='dash-topcontainer'>
    <div className='dash-subcontainer1'>
    <img src={dd}/>
    <h1>Course Enrolled</h1>
    <h2>30</h2>
    </div>
    <div className='dash-subcontainer1' style={{backgroundColor:"rgb(80, 27, 80)",boxShadow:"20px 20px rgb(250, 183, 248)"}}>
    <img src={dd22}/>
    <h1>Course Pending</h1>
    <h2>20</h2>
    </div>
    <div className='dash-subcontainer1' style={{backgroundColor:"rgb(0, 71, 30)",boxShadow:"20px 20px rgb(133, 233, 133)"}}>
    <img src={dd33}/>
    <h1>Course Completed</h1>
    <h2>10</h2>
    </div>
    </div>
    <div className='dash-sidepanel'>
    </div>
    <div className='dash-container'>
    <div className='dash-subcontainer2'>
    <div className='dash-design'>
    <h2>1</h2>
    <h2>Course</h2>
    <h2>Kesav</h2>
    <h2>6</h2>
    <button>Completed</button>
    
    </div>
    </div>
    <div className='dash-subcontainer2'>
    <div className='dash-design'>
    <h2>2</h2>
    <h2>Course</h2>
    <h2>Rakul</h2>
    <h2>7</h2>
    <button>Complete</button>
  
    </div>
    </div>
    <div className='dash-subcontainer2'>
    <div className='dash-design'>
    <h2>3</h2>
    <h2>Course</h2>
    <h2>Jamal</h2>
    <h2>7</h2>
    <button>Complete</button>
   
    </div>
    </div>
    <div className='dash-subcontainer2'>
    <div className='dash-design'>
    <h2>4</h2>
    <h2>Course</h2>
    <h2>Amar</h2>
    <h2>9</h2>
    <button>Complete</button>

    </div>
    </div>
    <div className='dash-subcontainer2'>
    <div className='dash-design'>
    <h2>5</h2>
    <h2>Course</h2>
    <h2>Jishn</h2>
    <h2>5</h2>
    <button>Complete</button>
        </div>
    </div>
    <div className='dash-subcontainer2'>
    
    </div>
    <div className='dash-subcontainer2'>
    
    </div>
    <div className='dash-subcontainer2'>
    
    </div>
    
    </div>
    </div>
  )
}