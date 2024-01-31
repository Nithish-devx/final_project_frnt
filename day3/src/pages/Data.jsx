import React from "react";
import "..//assets/css/data.css"
import d1 from "../assets/images/d1.png"
import d2 from "../assets/images/d2.jpeg"
import d3 from "../assets/images/d3.jpeg"
import d4 from "../assets/images/d4.jpg"
import d5 from "../assets/images/d5.jpeg"
import d6 from "../assets/images/d6.jpeg"
import d8 from "../assets/images/d8.jpeg"
import Navbar from "../components/NavBar";

function Data(){
    return(
       

        <div>
        <br></br>
      <h1 style={{fontFamily:"Segoe UI ,Tahoma,Geneva,Verdana,sans-serif",marginLeft:"15cm"}}>Cybersecurity Domains</h1>



<div className="d1">
<div >

<img src={d1} />

</div>
<div>
Critical infrastructure security protects the computer systems<br></br> applications, networks, data and digital assets that a society depends on for national security<br></br> economic health and public safety. In the United States the National Institute of Standards and Technology (NIST) <br></br>has developed a cybersecurity framework to help IT providers in this area, and the U.S. Department of Homeland Security’ <br></br>Cybersecurity and Infrastructure Security Agency (CISA) provides additional guidance.
</div>
</div>
<br></br>


<h1 style={{fontFamily:"Segoe UI ,Tahoma,Geneva,Verdana,sans-serif",marginLeft:"16cm"}}>Business Analyst</h1>

<div className="d2">
<div >

<img src={d2} />

</div>
<div>
Business analysis refers to the tasks, knowledge, and techniques needed to identify business requirements<br></br> and determine solutions to business problems. IIBA® Business Analysis courses provide official international certifications which recognise professional<br></br> knowledge and skills within business analysis, helping you boost your career to the next level.


We deliver training solutions to corporate, government agencies<br></br> public sectors, multinational organisations and private individuals. 
</div>
</div>
<br></br>

<h1 style={{fontFamily:"Segoe UI ,Tahoma,Geneva,Verdana,sans-serif",marginLeft:"16cm"}}>AI & Machine Learning</h1>

<div className="d3">
<div >

<img src={d3} />

</div>
<div>
As per studies, 90 % of all AI/ML models never make it into production. The reason is the lack of the right leadership to lead MLOps implementation<br></br> which is instrumental for the success of these projects.

MLOps or Machine Learning Operations (MLOps) <br></br>allows organisations to alleviate many of the issues on the path to AI with ROI and ensures your business derives the most value from your AI/ML investments.
</div>
</div>
<br></br>

<h1 style={{fontFamily:"Segoe UI ,Tahoma,Geneva,Verdana,sans-serif",marginLeft:"16cm"}}>Cloud Computing</h1>


<div className="d4">
<div >

<img src={d4} />

</div>
<div>
Cloud Computing tutorial provides basic and advanced concepts of Cloud Computing.<br></br> Our Cloud Computing tutorial is designed for beginners and professionals.

Cloud computing is a virtualization-based <br></br>technology that allows us to create, configure, and customize applications via an internet connection. The cloud technology includes <br></br>a development platform, hard disk, software application, and database.
</div>
</div>
<br></br>

<h1 style={{fontFamily:"Segoe UI ,Tahoma,Geneva,Verdana,sans-serif",marginLeft:"16cm"}}>Digital Marketing</h1>


<div className="d5">
<div >

<img src={d5} />

</div>
<div>
Digital marketing is a form of marketing that leverages the internet and digital technologies, such as computers and mobile devices<br></br> to connect with customers. More than running a sponsored Instagram ad to drive sales, it's a set of practices that <br></br>interacts with customers at every stage of the buying journey.

Digital marketing strategy includes email<br></br> social media, advertising, and multimedia messaging that is distributed through mobile and web. Over 60 percent of the global population<br></br> is online, and more people are joining them every day 
</div>
</div>
<br></br>

<h1 style={{fontFamily:"Segoe UI ,Tahoma,Geneva,Verdana,sans-serif",marginLeft:"16cm"}}>DevOps</h1>
<div className="d6">
<div >

<img src={d6} />

</div>
<div>
In the plan phase, DevOps teams ideate, define, and describe features and capabilities of the applications <br></br>and systems they are building. They track progress at low and high levels of granularity—from single-product tasks to tasks that span portfolios of multiple products.<br></br> Creating backlogs, tracking bugs, managing agile software development with Scrum, using Kanban boards, and visualizing progress with dashboards are some <br></br>of the ways DevOps teams plan with agility and visibility.
</div>
</div>

<br></br>
<h1 style={{fontFamily:"Segoe UI ,Tahoma,Geneva,Verdana,sans-serif",marginLeft:"16cm"}}>Software Development</h1>

<div className="d8">
<div >

<img src={d8} />

</div>
<div>
Software Development is defined as the process of designing, creating, testing, and maintaining computer programs and applications. <br></br>Software development plays an important role in our daily lives. It empowers smartphone apps and <br></br>supports businesses worldwide.

According to the U.S. Bure­au of Labor Statistics, there is a projecte­d 21% increase in software de­veloper<br></br> employment from 2018 to 2028, which is significantly higher than the national average­.
</div>
</div>

        </div>
    );
}
export default Data;