import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function TopNav(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                {/* Brand Link */}
                <Navbar.Brand 
                    href="#home"
                    onClick={() => props.handlePageChange("Home")}
                    className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
                >JMJ Portfolio</Navbar.Brand>
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
            </Navbar>
        </div>
    )
};

export default TopNav;