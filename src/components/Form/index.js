import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.state = {
    firstName: "",
    lastName: "",
    message: ""
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
    <div className="App">
      <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
        {/* Name */}
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
        </div>
        {/* Email */}
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            {/* emailHelp for tooltip */}
            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
        </div>
        {/* Message */}
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
 );
}

  onNameChange(e) {
	this.setState({name: e.target.value})
  }

  onEmailChange(e) {
	this.setState({email: e.target.value})
  }

  onMessageChange(e) {
	this.setState({message: e.target.value})
  }
}

export default Form;
