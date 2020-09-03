import React, { Component } from "react";
import TopNav from "../pages/Navigation/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";
import Footer from "../footer/Footer"
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
      <div className="page-container">
      <div className="content-wrap">
        {/* Top Navigation Bar */}
        <TopNav
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
    
        {/* "Hero" Image */}
        <section className="bgimage">
          <div className="cover">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>
            </div>
          </div>
        </section>

        {/* Render page content */}
        {this.renderPage()}
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default Works;
