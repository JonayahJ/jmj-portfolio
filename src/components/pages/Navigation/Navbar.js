import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../FontAwesomeIcons/index"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css"

function TopNav(props) {
    return (
        <div>
            {/* CollapseOnSelect creates the hamburger function */}
            <Navbar collapseOnSelect expand="lg" >
                {/* Brand Link */}
                <Navbar.Brand 
                    id="jmj"
                    href="#home"
                    onClick={() => props.handlePageChange("Home")}
                    className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
                >Jonayah Marie Jackson</Navbar.Brand>
                
                {/* Responsive features */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                
                {/* Right Nav */}
                <Nav className="mr-auto">
                    {/* Home Link */}
                    <Nav.Link 
                        href="#home"
                        onClick={() => props.handlePageChange("Home")}
                        className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
                    >Home</Nav.Link>
                    {/* About Link */}
                    <Nav.Link 
                        href="#about"
                        onClick={() => props.handlePageChange("About")}
                        className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
                    >About</Nav.Link>
                    {/* Portfolio Link */}
                    <Nav.Link 
                        href="#portfolio"
                        onClick={() => props.handlePageChange("Portfolio")}
                        className={props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
                    >Portfolio</Nav.Link>
                    {/* Contact Link */}
                    <Nav.Link 
                        href="#contact"
                        onClick={() => props.handlePageChange("Contact")}
                        className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
                    >Contact</Nav.Link>
                </Nav>

                {/* Left Nav = social media */}
                <Nav>
                    {/* LinkedIn */}
                    <Nav.Link href="https://www.linkedin.com/in/jonayahmjackson/">
                        <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="2x"/>
                    </Nav.Link>
                    {/* Twitter */}
                    <Nav.Link href="https://twitter.com/ThinkHalcyonLLC">
                        <FontAwesomeIcon icon={["fab", "twitter"]} size="2x"/>
                    </Nav.Link>
                    {/* Github */}
                    <Nav.Link href="https://github.com/JonayahJ">
                        <FontAwesomeIcon icon={["fab", "github"]} size="2x"/>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};

export default TopNav;