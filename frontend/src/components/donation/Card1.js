import "bootstrap/dist/css/bootstrap.min.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { Button, Container} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
// import {Addcard} from "../../service/service";
import Alert from "react-bootstrap/Alert";
function Card1() {
  const navigate = useNavigate();
  
  
const initialvalues={
  name_on_card:" ",
  card_number:" ",
  month:"",
  year:"",
  cvv:"",
  otp:"",
}

const [user,setUser]=useState(initialvalues);
const handleChange=event=>{
  setUser({...user,[event.target.name]:event.target.value})
  console.log(user);
}

const Addcarddetails=async()=>{
  // await Addcard(user);
}


  return (

    <div className="d-flex justify-content-center">
      <div className="pt-5 pb-5">
      <Card className="cardstyle">
          
          <Alert variant="secondary">
         
          <Alert.Heading className="d-flex justify-content-center">
                Please enter the card details
              </Alert.Heading>
            </Alert>

            <Card.Body>


              <form action="Success">
                <table >
<Row><h6>Enter Your card details</h6></Row>
                  
                  <Row>
                    <Col>
                      <input name="name_on_card" placeholder='Name on Card'  onChange={(e) => handleChange(e)}/>
                    </Col>
                    <Col>
                      <input name="card_number" placeholder='Card number'  onChange={(e) => handleChange(e)} />
                    </Col>
                  </Row>
                  <Row></Row>
                  <br></br>
                  <Row> <h6>Expiry Date</h6></Row>
                 
                  <Row>
                    <Col>
                      <input name="month" placeholder='Month'  onChange={(e) => handleChange(e)} />
                    </Col>
                    <Col>
                      <input name="year" placeholder='Year'  onChange={(e) => handleChange(e)}ed />
                    </Col>
                  </Row>
                  <br></br>
                  <Row><h6>CVV</h6></Row>
                  
                  <Row>
                    <Col>
                      <input name="cvv" placeholder='xxx'  onChange={(e) => handleChange(e)} />
                    </Col>
                    <Col>
                      <Button className="d-flex justify-content-right" onClick={() => { alert('OTP sent successfully on registered mobile number') }} variant="success">Generate OTP</Button>
                    </Col>
                  </Row>
                 

                  <Row>
                    <Col>
                      <input name="otp" placeholder='Enter OTP' onChange={(e) => handleChange(e)} />
                    </Col>
                    <Col>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>*After entering OTP click Next</Row>
                  
                 
                  <Row><Col> <Button className="d-flex justify-content-right" onClick={()=>{
                      Addcarddetails();navigate("/success");
                      
                    }}variant="success" >Submit</Button></Col>
                    <Col> <Button className="d-flex justify-content-right" onClick={() => { navigate("/moneyhome"); }}variant="success" >Back</Button></Col></Row>

                </table></form>
            </Card.Body>
          </Card>
        </div>
      </div>
      

  );
}

export default Card1;
