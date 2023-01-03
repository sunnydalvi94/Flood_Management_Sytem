import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Row className="homepage">
        <Col sm={8} className="mt-4">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 homeSlider"
                src={require(".././images/slider1.png")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 homeSlider"
                src={require(".././images/slider2.jpeg")}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 homeSlider"
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
                <div className="homebtn">
                  <Card.Img
                    variant="top"
                    src={require(".././images/alertButton.png")}
                  />
                </div>

                <div className="d-grid gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={(e) => navigate("/VictimReqMain")}
                  >
                    Rescue
                  </Button>
                </div>
              </Col>
              <Col>
                <Card.Img
                  variant="top"
                  className="mb-3 homebtn"
                  src={require(".././images/medShelter.png")}
                />
                <div className="d-grid gap-2 pt-1">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={(e) => navigate("/ReliefHome")}
                  >
                    Medical / Shelter
                  </Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card.Img
                  className="homebtn"
                  variant="top"
                  src={require(".././images/helpline.png")}
                />
                <div className="d-grid gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={(e) => navigate("/")}
                  >
                    HelpLine
                  </Button>
                </div>
              </Col>
              <Col>
                <Card.Img
                  className="homebtn"
                  variant="top"
                  src={require(".././images/donation.png")}
                />
                <div className="d-grid gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={(e) => navigate("/donationhome")}
                  >
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
