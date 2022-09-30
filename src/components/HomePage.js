import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import React from "react";

function HomePage() {
  return (
    <>
      <Row>
        <Col sm={8} className="mt-4">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                height={"550rem"}
                src={require(".././images/slider1.png")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                height={"550rem"}
                src={require(".././images/slider2.jpeg")}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                height={"550rem"}
                src={require(".././images/slider4.jpeg")}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col sm={3}>
          <Container>
            <Row xs={1} md={2} className="g-4 mt-2 mb-4">
              <Col>
                <Card.Img
                  variant="top"
                  src={require(".././images/alertButton.png")}
                />
                <div className="d-grid gap-2">
                  <Button variant="secondary" size="sm">
                    Rescue
                  </Button>
                </div>
              </Col>
              <Col>
                <Card.Img
                  variant="top"
                  className="mb-3"
                  src={require(".././images/medShelter.png")}
                />
                <div className="d-grid gap-2 pt-1">
                  <Button variant="secondary" size="sm">
                    Medical / Shelter
                  </Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card.Img
                  variant="top"
                  src={require(".././images/helpline.png")}
                />
                <div className="d-grid gap-2">
                  <Button variant="secondary" size="sm">
                    HelpLine
                  </Button>
                </div>
              </Col>
              <Col>
                <Card.Img
                  variant="top"
                  src={require(".././images/donation.png")}
                />
                <div className="d-grid gap-2">
                  <Button variant="secondary" size="sm">
                    Donation
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col sm={1}></Col>
      </Row>
    </>
  );
}

export default HomePage;
