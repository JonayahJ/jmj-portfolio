import React from "react";
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import "./style.css"

const Portfolio = () => (
  <div className="portfolio-container">
    {/* Title */}
    <h1>Projects</h1>
    <br></br>

    {/* Portfolio Cards */}
    <div>
      <CardDeck>
        <Card>
          <Card.Img variant="top" alt="NQR App Screenshot" src={require("../../../assets/images/CR-Graphic-01.png")} />
          <Card.Body>
            <Card.Title>Neighborhood Quaratine Resources App</Card.Title>
            <Card.Text>
            In order to keep our vulnerable neighbors safe and taken care of, our website will help residents locate the nearest Covid-19 testing sites, free meals locations, and a COVID-19 related picture to remind them of the current pandemic.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Project Date</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" alt="Snaps Coffee Shop" src={require("../../../assets/images/SnapsCoffeeShop.png")} />
          <Card.Body>
            <Card.Title>Snaps Coffee Shop App</Card.Title>
            <Card.Text>
            An app that brings an experience of a real coffee shop online. While you choose your drinks and delicious pastries and even while waiting for your order, slow down for a minute and enjoy the music.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Project Date</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" alt="NQR App Screenshot" src={require("../../../assets/images/NQR-App-Screenshot.jpg")} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Project Date</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  </div>
);

export default Portfolio;
