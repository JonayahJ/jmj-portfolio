import React from "react";
import Form from "../../Form/index"
import "./style.css"

const Contact = () => (
  <div className="contact-container" id="contact">
    {/* header title */}
    <h1>Contact Me</h1>

    <div className="row">
      {/* Contact Form */}
      <div className="contact-form-div col-6">
        <br></br>
        <Form />
      </div>

      {/* Image Div */}
      <div className="contact-image-div col-6">
        <img alt="Woman standing in front of large cellphone" src={require("../../../assets/images/Black-Woman-Using-Mobile-Phone.svg")} height="60%"></img>
      </div>
    </div>
  </div>
  
);

export default Contact;
