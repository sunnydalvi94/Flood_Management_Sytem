import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Row,Col,Stack, Container } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import { useState } from "react";
// import { addvictim } from "../../api/victimdetailsbedbooking";



const initialValue = {
  name: '',
  age: '',
  gender: ''
}


function ShelterBooking() {
  const navigate = useNavigate();

  const [victimdetails, setVictimdetails] = useState(initialValue);
  const { name,age,gender} = victimdetails;

const onValueChange=(e)=>{
    const {name, value}=e.target;
    setVictimdetails({...victimdetails,[name]:value})
    console.log(victimdetails);
}

const addvictimdetails = async (e) =>{
  e.preventDefault();
  // await addvictim(victimdetails);
  navigate("/ShelterBookingReceipt"); 

}


  const styles = {
    tbl: {
      width: "40vw",
    },
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
                BED BOOKING
              </Alert.Heading>
            </Alert>
            <Container className="mt-1 p-3">
              <Row>
                <Col sm={6}>
                  <Card.Img
                    style={styles.cardImg}
                    src={require("../../images/rescue.png")}
                  />
                </Col>
                <Col sm={6}>
                  <div>
                    <Stack className="mt-1 p-3">
                      <div>
                        <h6>
                          {" "}
                          <b>Address :</b> 45456{" "}
                        </h6>
                      </div>
                      <div>
                        <h6>
                          <b>Contact Details:</b> Nit Road,Silchar
                        </h6>
                      </div>
                    </Stack>
                  </div>
                </Col>
              </Row>
              <br />
              <Row className="p-3">
                <Col sm={8}>
                  <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                      <b>Date:</b>
                    </Form.Label>{" "}
                    <Col sm={10}>
                      <input
                        type="date"
                      //   ref={ref}
                      //   onChange={(e) => console.log(e.target.value)}
                      //   onFocus={() => (ref.current.type = "date")}
                      //   onBlur={() => (ref.current.type = "date")}
                      />
                    </Col>{" "}
                  </Form.Group>
                </Col>
                <Col sm={4}></Col>
              </Row>
              <div className="p-3">
                <b>Victim Details:</b>
              </div>
              
              <Form>
                

                  <Stack direction="horizontal" gap={1}>

                    <Form.Control onChange={(e) => onValueChange(e)}  value={name}
                      style={{ width: "150px" }} name='name' placeholder="Name" />

                    <Form.Control onChange={(e) => onValueChange(e)}  value={age}
                      style={{ width: "150px" }} name='age' placeholder="Age" />

                    <Form.Select onChange={(e) => onValueChange(e)}  value={gender}
                      style={{ width: "150px" }} name='gender'>

                      <option>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>

                    </Form.Select>
                  </Stack>


                  <div className=" mt-3">
                    <Button 
                    variant="success" size="sm" type="submit">
                      + Add Members
                    </Button>
                  </div>
                
              </Form>

              <div className="d-flex justify-content-center m-2">
                <Button
                  onClick={(e)=>addvictimdetails(e)}
                  variant="success"
                  size="sm"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Container>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ShelterBooking;
