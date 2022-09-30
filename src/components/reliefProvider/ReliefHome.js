import React from "react";
// import "./ReliefHome.css"
import image1 from "../../images/rescue-team.jpg";
import image2 from "../../images/food-med.jpg";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

export default function Relief1() {
  const navigate = useNavigate();
  const styles = {
    cardstyle: {
      width: "35rem",
      marginBottom: "20rem",
    },
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="pt-5 pb-5 ">
        <Card style={styles.cardstyle}>
          <Alert variant="secondary">
            <div className="d-flex justify-content-end mb-4">
              RELIEF PROVIDER ID : 1212
            </div>
            <Alert.Heading className="d-flex justify-content-center">
              RESCUE & RELIEF REQUEST RECEIVED
            </Alert.Heading>
          </Alert>

          <br></br>

          <div className="d-flex justify-content-center">
            <img src={image1} height={200} width={200} alt="" />
            &nbsp;&nbsp;&nbsp;
            <img id="img2" src={image2} height={200} width={200} alt="" />
          </div>

          <br></br>

          <Container className="d-flex justify-content-center">
            <Button
              onClick={() => {
                navigate("/relief2");
              }}
              variant="success"
            >
              Rescue Request
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
              onClick={() => {
                navigate("/relief3");
              }}
              variant="success"
            >
              Food & Medical Request
            </Button>
          </Container>
          <br></br>
        </Card>
      </div>
    </div>
  );
}
