import React from "react";
import '..//assets/css/About.css';
import pic3 from "../assets/images/pic3.png"
import pic4 from "../assets/images/pic4.png"
import pic20 from "../assets/images/pic20.png"
import Navbar from "../components/NavBar";
function About() {
  return (
    <div>
    <Navbar/>
      <br></br>
      <h1 style={{fontFamily:"Segoe UI ,Tahoma,Geneva,Verdana,sans-serif",marginLeft:"13cm"}}>You've come to the right place.</h1>
      <br></br>
      <h4>Passionate about teaching? Looking for a platform where you can share your knowledge, connect with professionals, and enrich careers, all while earning supplemental income?
You've come to the right place.
At Simplilearn, our constant endeavour is to create a network of world-class trainers and industry-experts who, in turn, create high-quality courseware that resonates with professionals the world over, cutting across domains, especially Full Stack, DevOps, Cloud Computing, Big Data, Deep Learning and NLP.</h4>

<br></br>
<h1 style={{fontFamily:"Segoe UI ,Tahoma,Geneva,Verdana,sans-serif",marginLeft:"15cm"}}>What's in it for me?</h1>

<h4>We're glad you asked! The material you produce will be used to train professionals worldwide, meaning increased visibility, a larger audience for your content, and the chance to become a part of an elite worldwide training community!At Simplilearn, we know the value of your time and effort, and also understand that offering fair and flexible compensation is a part of your business ethos. With our revenue-sharing model, you have the opportunity to earn tens of thousands of dollars every month!</h4>
<br></br>
<h1 style={{fontFamily:"Segoe UI ,Tahoma,Geneva,Verdana,sans-serif",marginLeft:"12cm"}}>Post Graduate Program Advantage</h1>
<h4>
Our curriculum equips you with the skills and knowledge to excel in your career. With a structured learning approach and industry-relevant projects, you will be able to tackle complex challenges and stay at the forefront of this field.
This Professional Certificate Program in Generative AI and Machine Learning encompasses an array of topics, ranging from Python programming, statistics, exploratory data analysis, supervised and unsupervised learning, deep learning, generative AI, prompt engineering, NLP, and other topics.</h4>

<br></br>
<img src={pic20} style={{maxWidth:"37.8cm",marginTop:"2cm"}} />
<br></br>

<img src={pic3} style={{maxWidth:"37.8cm",marginTop:"2cm"}} />

<img src={pic4} style={{maxWidth:"37.8cm",marginTop:"2cm",marginRight:"0.1cm",padding:"1cm"}} />


    </div>
  );
}

export default About;
