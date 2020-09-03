import React from "react";
import Image from "react-bootstrap/Image"
import "./style.css"

const About = () => (
  // used for reveal later on
  <div className="about-container" id="about">
    {/* main area div */}
    <div className="about-main row">
      {/* main text div */}
      <div className="about-text-div col-6">
        {/* text only */}
        <div>
          <h2 className="about-text">
            About Me
          </h2>
          <br></br>
          <p className="about-text-p subTitle">
            My name is Jonayah Marie Jackson. Everyone calls me Jo. I'm an aspiring software developer with a background in project management, graphic design, professional development, and operations. I wear many hats at work, and as such I have been maintaining my teams webpages on the college's website for the better part of two years. It even led me to begin creating basic websites on popular hosting sites like Squarespace and WordPress as a freelancer. It made me want to know more that just how to copy and paste random bits of code here and there.
          </p> 
          <p className="about-text-p subTitle">
            I know that there is so much more to learn about coding, programming, and developing apps that it makes my head spin with anticipation. I'm looking forward to learning as much as I can over the next few months and using my newfound knowledge in my personal and professional lives. Cliche time: if I can leave the world a better place than when I got it (with my code), then I will have done my job. After all, the goal is to create some pretty awesome things in this class.
          </p>
        </div>
        <br></br>
      </div>
      {/* main image */}
      <div className="about-image-div col-4">
        <Image alt="Jo working on laptop" src={require("../../../assets/images/JoPhoto.JPG")} rounded />
      </div>
    </div>
  </div>
  
);

export default About;