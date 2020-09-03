import React from "react";
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
            A Front-End Web Developer with experience building websites and web applications with HTML, CSS, JavaScript, React, and Node.  I love working on cool new projects and learning new coding languages.
          </p>
        </div>
      </div>
      {/* main image */}
      <div className="greeting-image-div">
        <img alt="Jo working on laptop" src={require("../../../assets/Black-Woman-Using-Laptop.svg")}></img>
      </div>
    </div>
  </div>
);

export default Home;

