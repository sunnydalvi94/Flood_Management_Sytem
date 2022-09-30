


import React, { useEffect, useState } from 'react'
import { Button,Form,Row,Dropdown,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

// import { getLoginApi } from '../../services/api';
let User;
const InitialValues ={
      "roleType" : "",
      "loginUserName" : "",
      "loginPassword" : ""
}

export default function LogIn() {

  const [login,setLogin] = useState(InitialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [serverUser, setServerUser] = useState([]);
  const navigate=useNavigate();
  
  
    const onValueChange2 = (e) =>{
        console.log(e.target.name, e.target.innerText);
        setLogin({...login, [e.target.name] : e.target.innerText})
        console.log(login);
        if(e.target.innerText==="Victims"){
          console.log("Role of USer Victims");
        }
        if(e.target.innerText==="Organization"){
          console.log("Role of USer Organization");
        }
        if(e.target.innerText==="Volunteer"){
          console.log("Role of USer Volunteer");
        }
      }
    const onValueChange = (e) =>{
        console.log(e.target.name, e.target.value);
        setLogin({...login, [e.target.name] : e.target.value})
        console.log(login);
      }
     
   
        
        useEffect(() => {
          console.log(formErrors);
          if (Object.keys(formErrors).length === 0 && loginUser) {
            console.log(login);
          }
        }, [formErrors]); 

        const validate = (values) => {
          const errors = {};
          
          if (!values.loginUserName) {
            errors.loginUserName = "Username is required!";
          }
          if (!values.roleType) {
            errors.roleType = "Type Of User is Required!";
          } 
          if (!values.loginPassword) {
            errors.loginPassword = "Password is required";
          } else if (values.loginPassword.length < 4) {
            errors.loginPassword = "Password must be more than 4 characters";
          } else if (values.loginPassword.length > 10) {
            errors.loginPassword = "Password cannot exceed more than 10 characters";
          }
          return errors;
        };
        const loginUser =  (e) => {
          // await getLoginApi(login);\
          console.log("test");
          e.preventDefault();
          setFormErrors(validate(login));
          setIsSubmit(true);
          if(login.roleType==="Victims"){
            console.log("Vitims ROle selected");
            // getVictimsDetails(login);
            console.log(serverUser.data);
            
          }
            
        }  
        
       
        const getVictimsDetails = async  (e) =>{
          // let response = await getLoginApi(e);
          // console.log(response.data);
          // setServerUser(response.data);
          // let res=response.data;
          // console.log(res.length);
          // if(res.length!==0){
          //   console.log("LOGIN SUCCESFUL");
          //   alert('LOGIN SUCCESFULL');
          //   // User=res.data;
          //   // console.log(User,"user");
          //   navigate("/components/victimsReq/VictimReqMain");
          //   // {state :{loginUserName:user.loginUserName}});
          //   // navigate("/patientDetails", { state: { patId: user.patId } });
            
          // }else{
          //   console.log("CREDENTAILS NOT MATCHED");
          //   alert('password & username Credentails Not matched ');
          //   alert('Please Register for Victim User');
          //   navigate("/RegistrationHome/VictimsRegistration");
          // }
          
      }
      const styles = {
        cardstyle: {
          width: "30rem",
          marginBottom: "25rem",
        },
      };
        
      User=login;
  return (
    <div className="d-flex justify-content-center">
    <div className="pt-5 pb-5 ">
      <Card style={styles.cardstyle}>
        <Alert variant="secondary">
          <Alert.Heading className="d-flex justify-content-center">
            LOG IN PAGE
          </Alert.Heading>
        </Alert>

        <form className="p-4">
          {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message success">Signed in successfully</div>
          ) : (
            <pre>{JSON.stringify(login, undefined, 2)}</pre>
          )} */}
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm={3}>
                User Type
              </Form.Label>
              <Col sm={9}>
                <Dropdown column sm={3}>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Select Type of User
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      id="victims"
                      onClick={(e) => {
                        onValueChange2(e);
                      }}
                      name="roleType"
                    >
                      Victims
                    </Dropdown.Item>
                    <Dropdown.Item
                      id="organization"
                      onClick={(e) => {
                        onValueChange2(e);
                      }}
                      name="roleType"
                    >
                      Organization
                    </Dropdown.Item>
                    <Dropdown.Item
                      id="volunteer"
                      onClick={(e) => {
                        onValueChange2(e);
                      }}
                      name="roleType"
                    >
                      Volunteer
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <p>{formErrors.roleType}</p>
              </Col>
            </Form.Group>
          </Form>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm={3}>
              User Name
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Enter User Name"
                onChange={(e) => onValueChange(e)}
                name="loginUserName"
              />{" "}
            </Col>
            <p>{formErrors.loginUserName}</p>
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
                name="loginPassword"
              />{" "}
            </Col>
            <p>{formErrors.loginPassword}</p>
          </Form.Group>
          <Button
            onClick={(e) => loginUser(e)}
            variant="success"
            type="login"
            // title='Umer'
          >
            Log In
          </Button>
        </form>
      </Card>
    </div>
  </div>
  )
}


export {User};