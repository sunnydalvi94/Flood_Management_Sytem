import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import { Adddonator } from "../../service/service";
import Alert from "react-bootstrap/Alert";

function Donationhome() {

  const navigate = useNavigate();

  const initialvalues = {
    IN_FNAME: "",
    IN_LNAME: "",
    IN_ADDRESS: "",
    IN_City: "",
    IN_CONTACT: "",
    IN_EMAIL: "",
    DONATION_TYPE: "",
  };

  const [user, setUser] = useState(initialvalues);
  const [selected, setSelected] = useState("yes");
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
    setSelected(event.target.value);
  };
  const Adddonaterdetails = async () => {
    // await Adddonator(user);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="pt-5 pb-5">
        <Card className="cardstyle">
            <Alert variant="secondary">
              <Alert.Heading className="d-flex justify-content-center">
                Please fill the details below
              </Alert.Heading>
            </Alert>

            <Card.Body>
              <form>
                <table>
                  <h6>Personal details</h6>
                  <Row>
                    <Col>
                      <input
                        name="IN_FNAME"
                        placeholder="First Name"
                        onChange={(e) => handleChange(e)}
                      />
                    </Col>
                    <Col>
                      <input
                        onChange={(e) => handleChange(e)}
                        name="IN_LNAME"
                        placeholder="Last Name"
                      />
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <h6>Address details</h6>
                  </Row>
                  <Row>
                    <Col>
                      <input
                        onChange={(e) => handleChange(e)}
                        name="IN_ADDRESS"
                        placeholder="Address line 1"
                      />
                    </Col>
                    <Col>
                      <input
                        onChange={(e) => handleChange(e)}
                        name="IN_City"
                        placeholder="City"
                      />
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <h6>Contact details</h6>
                  </Row>

                  <Row>
                    <Col>
                      <input
                        onChange={(e) => handleChange(e)}
                        name="IN_EMAIL"
                        placeholder="Email id"
                      />
                    </Col>
                    <Col>
                      <input
                        onChange={(e) => handleChange(e)}
                        name="IN_CONTACT"
                        placeholder="Mobile Number"
                      />
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <h6>Donation type</h6>
                  </Row>
                  <input
                    type="radio"
                    id="money"
                    name="DONATION_TYPE"
                    value="money"
                    checked={selected === "money"}
                    onChange={handleChange}
                  />
                  <label htmlFor="money">&nbsp;Donate Money</label>

                  <br></br>

                  <input
                    type="radio"
                    id="clothes"
                    name="DONATION_TYPE"
                    value="clothes"
                    onChange={handleChange}
                    checked={selected === "clothes"}
                  />
                  <label for="clothes">&nbsp;Food/Clothes</label>

                  <br></br>
                  <br></br>

                  <Row>
                    <Col sm={7}>
                      <Button
                        className="d-flex justify-content-center"
                        onClick={() => {
                          Adddonaterdetails();
                          if (selected === "money") {
                            navigate("/moneyhome");
                          } else if (selected === "clothes") {
                            navigate("/Foodcloth");
                          } else {
                            alert("Please select Donation type");
                          }
                        }}
                        variant="success"
                      >
                        Next
                      </Button>
                    </Col>
                    <Col sm={5}>
                      <Button
                        className="d-flex justify-content-right"
                        onClick={() => {
                          navigate("/");
                        }}
                        variant="success"
                      >
                        Back
                      </Button>
                    </Col>
                  </Row>
                </table>
              </form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Donationhome;
