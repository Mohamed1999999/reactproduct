import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Card, Col, Container, Row } from "react-bootstrap";
import Image from "./Image";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";

function App() {
  const firstname = "Mohamed";
  const imageplay = "./images/deep-web-cover.jpg";

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={6} className="mx-auto">
          <Card>
            <Image />
            <Card.Body>
              <Card.Title>
                <Name />
              </Card.Title>
              <Card.Text>
                <Description />
              </Card.Text>
              <Card.Text>
                <Price />
              </Card.Text>
            </Card.Body>
            <div className="text-center mb-3">
              <Card.Link>
                <button className="commander">Ajouter au panier</button>
              </Card.Link>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-3">
          <h1 className="salutation">
            {firstname ? `Hello ${firstname}` : "there"}
          </h1>
          <span className="image-container">
            {firstname && <img src={imageplay} alt="photo de profil" />}
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
