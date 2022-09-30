import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addRelief } from "../../api/api";

function RescueForm() {
  const initialInput = {
    reqType: "",
    Cotton_qty: "",
    Bandages_qty: "",
    Dettol_in_liters: "",
    Pain_Killers_qty: "",
    FirstAid_KIT_qty: "",
    water_in_liters: "",
    Rice_Dal_qty: "",
    Baby_Food_qty_In_KG: "",
    Biscuits_qty_In_KG: "",
    Milk_in_liters: "",
  };
  const [inputs, setinputs] = useState(initialInput);
  const [div1css, setDiv1css] = useState({
    display: "none",
  });
  const [div2css, setDiv2css] = useState({
    display: "none",
  });
  // const [display, setDisplay2] = useState("none");
  let onValueChange = (e) => {
    // console.log(e.target.value, e.target.name);
    setinputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(e.target.value);
      if (e.target.value == "food") {
        setDiv2css({ display: "block" });
        setDiv1css({ display: "none" });
      }
      if (e.target.value == "medical") {
        setDiv2css({ display: "none" });
        setDiv1css({ display: "block" });
      }
      if (e.target.value == "foodMed") {
        setDiv2css({ display: "block" });
        setDiv1css({ display: "block" });
      }
  };
  const serverData = async () => {
    console.log("test data");
    await addRelief(inputs);
  };

  const navigate = useNavigate();
  const styles = {
    cardstyle: {
      width: "45rem",
      marginBottom: "20rem",
    },
  };
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
                FOOD & MEDICAL REQUEST
              </Alert.Heading>
            </Alert>
            <div className="m-4">
              <Form>
                <h5>
                  <b> TYPE OF REQUEST</b>
                </h5><br />
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        onChange={(e) => onValueChange(e)}
                        type="radio"
                        id="t1"
                        name="reqType"
                        value="food"
                        label="FOOD"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox2">
                      <Form.Check
                        onChange={(e) => onValueChange(e)}
                        type="radio"
                        id="t2"
                        name="reqType"
                        value="medical"
                        label="MEDICAL"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox3">
                      <Form.Check
                        onChange={(e) => onValueChange(e)}
                        type="radio"
                        name="reqType"
                        id="t3"
                        value="foodMed"
                        label="BOTH"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <br/>

                <div style={div1css}>
                  <h5>
                    <b> Select Medical Item with Quality</b>
                  </h5>
                  <Row className="pt-3">
                    <Col sm={5}>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Label>
                          {" "}
                          Cotton and Antiseptic Liquids (nos) :
                        </Form.Label>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Control
                        onChange={(e) => onValueChange(e)}
                        size="sm"
                        type="number"
                        name="Cotton_qty"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={5}>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Label>
                          Bandages Rolls and Medical Tapes (nos) :
                        </Form.Label>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Control
                        onChange={(e) => onValueChange(e)}
                        size="sm"
                        type="number"
                        name="Bandages_qty"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={5}>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Label>Dettol (lit) :</Form.Label>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Control
                        onChange={(e) => onValueChange(e)}
                        size="sm"
                        type="number"
                        name="Dettol_in_liters"
                      />
                    </Col>
                  </Row>{" "}
                  <Row>
                    <Col sm={5}>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Label>Pain Killers (nos) :</Form.Label>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Control
                        onChange={(e) => onValueChange(e)}
                        size="sm"
                        type="number"
                        name="Pain_Killers_qty"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={5}>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Label>First Aid Kit (nos) :</Form.Label>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Control
                        onChange={(e) => onValueChange(e)}
                        size="sm"
                        type="number"
                        name="FirstAid_KIT_qty"
                      />
                    </Col>
                  </Row>
                </div>

                <br />

                <div style={div2css}>
                  <h5>
                    <b>Select Food Items with Quantity</b>
                  </h5>
                  <Row className="pt-3">
                    <Col sm={5}>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Label>Drinking water (lit) :</Form.Label>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Control
                        onChange={(e) => onValueChange(e)}
                        size="sm"
                        type="number"
                        name="water_in_liters"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={5}>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Label>Rice and Dal (kg.) :</Form.Label>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Control
                        onChange={(e) => onValueChange(e)}
                        size="sm"
                        type="number"
                        name="Rice_Dal_qty"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={5}>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Label>Baby Food (kg):</Form.Label>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Control
                        onChange={(e) => onValueChange(e)}
                        size="sm"
                        type="number"
                        name="Baby_Food_qty_In_KG"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={5}>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Label>Biscuits (kg) :</Form.Label>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Control
                        onChange={(e) => onValueChange(e)}
                        size="sm"
                        type="number"
                        name="Biscuits_qty_In_KG"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={5}>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Label>Milk (lit) :</Form.Label>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Control
                        onChange={(e) => onValueChange(e)}
                        size="sm"
                        type="number"
                        name="Milk_in_liters"
                      />
                    </Col>
                  </Row>
                </div>
                <br />
                <div className="d-flex justify-content-center pt-4">
                  <Button
                    onClick={(e) => {
                      navigate("/FoodMedReceipt");
                      e.preventDefault();
                      serverData();
                    }}
                    variant="success"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default RescueForm;
