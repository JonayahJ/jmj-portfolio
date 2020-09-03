import React from "react";
import "../../FontAwesomeIcons/index"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css"

const Home = () => (
  // used for reveal later on
  <div className="greet-main" id="greeting">
    {/* main area div */}
    <div className="greeting-main">
      {/* main text div */}
      <div className="greeting-text-div">
        {/* text only */}
        <div>
          <h1 className="greeting-text">
            Hello, I'm Jo!
          </h1>
          <br></br>
          <p className="greeting-text-p subTitle">
            I'm an aspiring Front-End Web Developer with experience building websites and web applications with HTML, CSS, JavaScript, React, and Node.  I've used everything from Squarespace to Heroku, and look forward to building more user experiences online.
          </p> 
          <p className="greeting-text-p subTitle">
            I love working on cool new projects and learning new coding languages.
          </p>
        </div>
        <br></br>
        {/* Icons */}
        <div>
          <FontAwesomeIcon icon={["fab", "html5"]} size="4x"/> &nbsp;
          <FontAwesomeIcon icon={["fab", "css3-alt"]} size="4x"/> &nbsp;
          <FontAwesomeIcon icon={["fab", "js-square"]} size="4x"/> &nbsp;
          <FontAwesomeIcon icon={["fab", "react"]} size="4x"/> &nbsp;
          <FontAwesomeIcon icon={["fab", "node-js"]} size="4x"/>
        </div>
      </div>
      {/* main image */}
      <div className="greeting-image-div">
        <img alt="Jo working on laptop" src={require("../../../assets/images/Black-Woman-Using-Laptop.svg")}></img>
      </div>
    </div>
  </div>
);

export default Home;

