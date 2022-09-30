import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import Alert from "react-bootstrap/Alert";

import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function VictimReqMain() {
  const styles = {
    cardImg: {
      width: "15vw",
      height: "9vw",
      padding: "10px",
    },
    btn: {
      color: "",
      backgroundColor: "#A0E3B0",
    },

    cardstyle: {
      width: "35rem",
      marginBottom: "20rem",
    },
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="pt-5 pb-5">
          <Card style={styles.cardstyle}>
            <Alert variant="secondary">
              <div className="d-flex justify-content-end mb-4">
                VICTIM ID : 1212
              </div>
              <Alert.Heading className="d-flex justify-content-center">
                SEND RESCUE & RELIEF REQUEST
              </Alert.Heading>
            </Alert>
            <Row>
              <Col sm={8}>
                <Card.Img
                  style={styles.cardImg}
                  src={require("../../images/rescue.png")}
                />
              </Col>
              <Col sm={4}>
                <div className="d-flex justify-content mt-5">
                  <Button
                    variant="success"
                    onClick={() => {
                      navigate("/RescueForm");
                    }}
                  >
                    Rescue Request
                  </Button>
                </div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col sm={7}>
                <Card.Img
                  style={styles.cardImg}
                  src={require("../../images/medical.png")}
                />
              </Col>
              <Col sm={5}>
                <div className="d-flex justify-content mt-5">
                  <Button
                    variant="success"
                    onClick={() => {
                      navigate("/FoodMedReq");
                    }}
                  >
                    Food & Medical Request
                  </Button>
                </div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col sm={8}>
                <Card.Img
                  style={styles.cardImg}
                  src={require("../../images/shelter.png")}
                />
              </Col>
              <Col sm={4}>
                <div className="d-flex justify-content mt-5">
                  <Button
                    variant="success"
                    onClick={() => {
                      navigate("/ShelterReliefCamp");
                    }}
                  >
                    Shelter Request
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </>
  );
}

export default VictimReqMain;
