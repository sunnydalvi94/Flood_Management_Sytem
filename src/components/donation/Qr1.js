import { useNavigate } from "react-router-dom";
import qr from "../../images/qr.jpeg";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

function Qr1() {
  const styles = {
    cardstyle: {
      width: "29rem",
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
              <Alert.Heading className="d-flex justify-content-center">
                QR Code
              </Alert.Heading>
            </Alert>

            <Card.Body>
              <form action="Success">
                <h5>
                  {" "}
                  Scan Barcode shown below and pay the Donation Click submit
                  After Payment
                </h5>
                <br></br>
                <div align="center">
                  <img src={qr} height={300} width={300} alt="qrcode" />
                </div>

                <br></br>
                <br></br>
                <Row>
                  <Col>
                    <div align="center">
                      <Button
                        className="d-flex justify-content-center"
                        onClick={() => {
                          navigate("/success");
                        }}
                        variant="success"
                      >
                        Next
                      </Button>
                    </div>
                  </Col>
                  <Col>
                    <div align="center">
                      {" "}
                      <Button
                        className="d-flex justify-content-right"
                        onClick={() => {
                          navigate("/moneyhome");
                        }}
                        variant="success"
                      >
                        Back
                      </Button>
                    </div>
                  </Col>
                </Row>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Qr1;
