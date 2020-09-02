import React, { Component } from "react";
import TopNav from "../Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import "./style.css";

class Works extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <TopNav
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}

        {/* "Hero" Image */}
        <section className="bgimage">
          <div className="cover">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>
            </div>
          </div>
        </section>

        
      </div>
    );
  }
}

export default Works;
