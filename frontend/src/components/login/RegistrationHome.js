import React from 'react'
import { Container,Button,Card  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Alert from "react-bootstrap/Alert";
import { Row, Col } from "react-bootstrap";


export default function RegistrationHome() {
  
  const styles = {
    
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="pt-5 pb-5 ">
      <Card className="cardstyle">
          <Alert variant="secondary">
            <Alert.Heading className="d-flex justify-content-center">
              SELECT TYPE OF REGISTRATION
            </Alert.Heading>
          </Alert>

          <Row className="mt-5">
            <Col sm={4} className="d-flex justify-content-center">
              <Link to="/RegistrationHome/VictimsRegistration">
                <Button variant="outline-success">Registration for Victims</Button>
              </Link>
            </Col>
            <Col sm={4} className="d-flex justify-content-center">
              <Link to="/RegistrationHome/OrganizationRegistration">
                <Button variant="outline-success">
                  Registration for Organization
                </Button>
              </Link>
            </Col>
            <Col sm={4} className="d-flex justify-content-center">
              <Link to="/RegistrationHome/VolunteerRegistration">
                <Button variant="outline-success">
                  Registration for Volunteer
                </Button>
              </Link>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  )
}
