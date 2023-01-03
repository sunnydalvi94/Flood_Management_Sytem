import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { add } from "../../api/api";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

function RescueForm() {
  const initialInput = {
    vContact: "",
    vAddress: "",
    vCount: "",
  };
  const [inputs, setinputs] = useState(initialInput);
  let onValueChange = (e) => {
     console.log(e.target.value,e.target.name);
    setinputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const serverData = async () => {
    await add(inputs);
  };

  const navigate = useNavigate();
  const styles = {
    cardstyle: {
      width: "40rem",
      marginBottom: "20rem",
    },
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="pt-5 pb-5 ">
        <Card className="cardstyle">
            <Alert variant="secondary">
              <div className="d-flex justify-content-end mb-4">
                VICTIM ID : 1212
              </div>
              <Alert.Heading className="d-flex justify-content-center">
                RESCUE FORM VICTIMS
              </Alert.Heading>
            </Alert>
            <Form className="mt-1 p-3">
              <Form.Group className="mb-3">
                <Form.Label>Contact No.:</Form.Label>
                <Form.Control
                  type="number"
                  name="vContact"
                  onChange={(e) => onValueChange(e)}
                  placeholder="Enter Contact Number"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Current Address:</Form.Label>
                <Form.Control
                  onChange={(e) => onValueChange(e)}
                  type="text"
                  name="vAddress"
                  placeholder="Enter Your Address"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Count of People:</Form.Label>
                <Form.Control
                  onChange={(e) => onValueChange(e)}
                  type="number"
                  name="vCount"
                  placeholder="Enter Count in Number"
                  required
                />
              </Form.Group>

              <Row className="pt-3">
                <Col>
                  {" "}
                  <Button
                    onClick={(e) => {
                      navigate("/RequestSlip");
                      e.preventDefault();
                      serverData();
                    }}
                    variant="success"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Col>
                <Col>
                  <span className="d-flex justify-content-end">
                    <Button
                      onClick={(e) => {
                        navigate("/VictimReqMain");
                        e.preventDefault();
                        serverData();
                      }}
                      variant="success"
                      type="submit"
                    >
                      Back
                    </Button>
                  </span>
                </Col>
              </Row>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
}

export default RescueForm;
