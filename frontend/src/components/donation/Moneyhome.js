import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
// import { paymentmode } from "../../service/service";
import Alert from "react-bootstrap/Alert";

function Moneyhome() {
 
  const navigate = useNavigate();

  const initialvalues = {
    AMOUNT: "",
    paymentmode: "",
  };

  const [user, setUser] = useState(initialvalues);
  const [selected, setSelected] = useState("yes");
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
    setSelected(event.target.value);
  };
  const Addpaymentmode = async () => {
    // await paymentmode(user);
  };

  return (
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
              <table align="center">
                <h5>Enter amount in rupees</h5>

                <input
                  name="AMOUNT"
                  placeholder="Amount"
                  onChange={(e) => handleChange(e)}
                />

                <br></br>
                <br></br>

                <h5>Select payment mode</h5>

                <input
                  type="radio"
                  id="upi"
                  name="paymentmode"
                  value="upi"
                  checked={selected === "upi"}
                  onChange={handleChange}
                />
                <lable value="upi">UPI</lable>
                <br></br>

                <input
                  type="radio"
                  id="card"
                  name="paymentmode"
                  value="card"
                  checked={selected === "card"}
                  onChange={handleChange}
                />
                <lable value="card">Credit Card/Debit Card</lable>
                <br></br>

                <input
                  type="radio"
                  id="qr"
                  name="paymentmode"
                  value="qr"
                  checked={selected === "qr"}
                  onChange={handleChange}
                />
                <lable value="qr">Scane QR code</lable>
                <br></br>
                <br></br>

                <Row>
                  <Col>
                    <Button
                      className="d-flex justify-content-left"
                      onClick={() => {
                        Addpaymentmode();
                        if (selected === "upi") {
                          navigate("/upi");
                        } else if (selected === "card") {
                          navigate("/card");
                        } else if (selected === "qr") {
                          navigate("/qr");
                        } else {
                          alert("Please select Payment method");
                        }
                      }}
                      variant="success"
                    >
                      Next
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="d-flex justify-content-right"
                      onClick={() => {
                        navigate("/donationhome");
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
  );
}

export default Moneyhome;
