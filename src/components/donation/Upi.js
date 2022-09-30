import "bootstrap/dist/css/bootstrap.min.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { Button} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
// import { Addupi } from "../../service/service";
import { useState } from 'react';
import Alert from "react-bootstrap/Alert";
function Upi() {
  const styles = {
    cardstyle: {
      width: "24rem",
      marginBottom: "20rem",
    },
  };
  const navigate = useNavigate();

const initialvalues={
  upi_id:"",
}

const [user,setUser]=useState(initialvalues);
const handleChgane=event=>{
  setUser({...user,[event.target.name]:event.target.value});
  console.log(user);
}

const Addupiid=async()=>{
  // await Addupi(user);
}

  return (


    <>
    <div className="d-flex justify-content-center">
      <div className="pt-5 pb-5">
      <Card style={styles.cardstyle}>
          
          <Alert variant="secondary">
         
          <Alert.Heading className="d-flex justify-content-center">
                UPI Mode  
              </Alert.Heading>
            </Alert>

            <Card.Body>
              <form>

                <h5>Enter UPI id</h5>
                <br></br>
                <table>
                  <Row>
                    <Col>

                      <input name='upi_id' placeholder='Ex:-upiid@upi' required />
                    </Col>
                    <Col> <Button className="d-flex justify-content-right" onClick={() => { alert('upi id verified') }} variant="success">Verify</Button>
                    </Col>
                  </Row>
                </table>
                <br></br>
                <br></br>

                <h5>*Accept the UPI request from your upi application & click on submit</h5>
                <br></br><br></br>
                <Row><Col><Button className="d-flex justify-content-right" onClick={() => { Addupiid();navigate("/success");alert("Donation paid successfully") }} variant="success">Next</Button></Col>
                  <Col> <Button className="d-flex justify-content-right" onClick={() => { navigate("/moneyhome"); }} variant="success">Back</Button></Col></Row>
              </form>

            </Card.Body>
          </Card>
        </div>
      </div>

    </>

  );
}

export default Upi;
