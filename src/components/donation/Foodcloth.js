import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
// import {Addfood} from "../../service/service";
import Alert from "react-bootstrap/Alert";


function Foodcloth() {
  const styles = {
    cardstyle: {
      width: "29rem",
      marginBottom: "20rem",
    },
  };
  const navigate = useNavigate();

const initialvalues={
  food:"",
  item_description:"",
  pickup_address:"",
}

const [user,setUser]=useState(initialvalues);

const handleChange=event=>{
  setUser({...user,[event.target.name]:event.target.value})
  console.log(user);
  
}

const Addfooddetails=async()=>{
  // await Addfood(user);
}
  return (
    <div className="d-flex justify-content-center">
    <div className="pt-5 pb-5">
    <Card style={styles.cardstyle}>
          
          <Alert variant="secondary">
         
          <Alert.Heading className="d-flex justify-content-center">
                Please fill the details below
              </Alert.Heading>
            </Alert>

          <Card.Body>


            <form>

              <table align="center">

                <h5>Select Type of Donation</h5>



                <input type="radio" name="food" value="food" onChange={(e) => handleChange(e)} />
                <lable value="food">Food</lable>
                <br></br>
                <input type="radio" name="food" value="medicine" onChange={(e) => handleChange(e)} />
                <lable value="medicine">Medicine</lable>
                <br></br>
                <input type="radio" name="food" value="cloths" onChange={(e) => handleChange(e)} />
                <lable value="clothes">Clothes</lable>
                <br></br>


                <h5>Description of Items with Quantity</h5>

                <textarea name="item_description" onChange={(e) => handleChange(e)}></textarea>

                <br></br><br></br>
                <h5>Address to Pickup</h5>
                <textarea name="pickup_address" onChange={(e) => handleChange(e)} ></textarea>

                <br></br> <br></br>

                <Row>
                  <Col>
                    <Button className="d-flex justify-content-right" onClick={()=>{
                      Addfooddetails();
                      alert("Thank you...YOu donated successfully...!!");
                      navigate("/success");
                    }} variant="success">Submit</Button>
                  </Col>
                  <Col><div align='center'>
                    <Button className="d-flex justify-content-right" onClick={() => { navigate("/donationhome"); }} variant="success">Back</Button>
                    </div></Col>
                </Row>


              </table></form>
          </Card.Body>
        </Card>
      </div>
    </div>


  );
}

export default Foodcloth;
