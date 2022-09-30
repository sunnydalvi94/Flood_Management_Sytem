import React, { useState } from 'react'
import {  Row,Col  } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
// import { addVolunteerApi } from '../../services/api';
import { useNavigate } from 'react-router-dom';


const InitialValues ={
    volFname : "",
    volLname : "",
    volMobNo : "",
    volAddress : "",
    volCity : "",
    volEmail : "",
    volType : "",
    volBloodg : "",
    volUserName : "",
    volPassword : "",
    volRePassword:""
}
export default function VolunteerRegistration() {

    const [volunteer,setVolunteer] = useState(InitialValues) ;
    const navigate = useNavigate();

    const onValueChange = (e) =>{
        console.log(e.target.name,e.target.value);
        setVolunteer({...volunteer, [e.target.name] : e.target.value})
        console.log(volunteer);
    };

    const addVolunteer = async () => {
        // await addVolunteerApi(volunteer);
        alert("Organization Registration Successfull please click ok to navigate");
        navigate('/LogIn');   
    }
    const styles = {
      cardstyle: {
        width: "50rem",
        marginBottom: "20rem",
      },
    };
  return (
    <div className="d-flex justify-content-center">
      <div className="pt-5 pb-5 ">
        <Card style={styles.cardstyle}>
          <Alert variant="secondary">
            <Alert.Heading className="d-flex justify-content-center">
              VOLUNTEER REGISTRATION FORM
            </Alert.Heading>
          </Alert>
          <Form className=" p-4">
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Volunteer First Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  onChange={(e) => onValueChange(e)}
                  name="volFname"
                  required
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Volunteer Last Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  onChange={(e) => onValueChange(e)}
                  name="volLname"
                  required
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Mobile No
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="number"
                  placeholder="Enter mobile number"
                  onChange={(e) => onValueChange(e)}
                  name="volMobNo"
                  required
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Address
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                  onChange={(e) => onValueChange(e)}
                  name="volAddress"
                  required
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                City
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter city Name"
                  onChange={(e) => onValueChange(e)}
                  name="volCity"
                  required
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Email Address
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address here"
                  onChange={(e) => onValueChange(e)}
                  name="volEmail"
                  required
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Type of Volunteer
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter what type volunteer work"
                  onChange={(e) => onValueChange(e)}
                  name="volType"
                  required
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Blood Group
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter blood group"
                  onChange={(e) => onValueChange(e)}
                  name="volBloodg"
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                User Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Enter User Name"
                  onChange={(e) => onValueChange(e)}
                  name="volUserName"
                  required
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Password
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="password"
                  placeholder="enter password"
                  onChange={(e) => onValueChange(e)}
                  name="volPassword"
                  required
                />{" "}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                Re-Enter Password
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="password"
                  placeholder="re-enter password"
                  onChange={(e) => onValueChange(e)}
                  name="volRePassword"
                  required
                />{" "}
              </Col>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Accept Terms & Check me out" />
            </Form.Group>
            <div className="pt-4">
              <Button
                onClick={() => addVolunteer()}
                variant="success"
                type="submit"
              >
                Register As Volunteer
              </Button>{" "}
              &nbsp;&nbsp;&nbsp;
              <Button variant="success" type="reset">
                Reset Values
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  )
}
