import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Success() {
  const navigate = useNavigate();
  const styles = {
    cardstyle: {
      width: "29rem",
      marginBottom: "30rem",
    },
    img1: {
      width: "4.5rem",
      height: "3rem",
    },
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="pt-5 pb-5">
          <Card style={styles.cardstyle}>
            <Alert variant="secondary">
              <Alert.Heading className="d-flex justify-content-center">
                DONATION SUCCESSFULL
              </Alert.Heading>
            </Alert>
            <Card.Body>
              <Row>
                <Col sm={2}>
                  {" "}
                  <img
                    style={styles.img1}
                    src={require("../../images/success.png")}
                    alt=""
                  />{" "}
                </Col>
                <Col sm={10}>
                  {" "}
                  <h4 className="pt-2">Thank You for Donation !</h4>
                </Col>
              </Row>
              <br />
              <div className="d-flex justify-content-center mt-5">
                <Button
                  onClick={() => {
                    navigate("/");
                  }}
                  variant="success"
                >
                  Submit
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Success;
