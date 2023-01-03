import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header1() {
    return (
      <>
      <div >
        
          <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
            <Container >
            <Navbar.Brand href="/">
            <img
              src={require("../images/logo.png")}
              width="300"
              height="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href="/">
                {" "}
                <h5>Home</h5>{" "}
              </Nav.Link>
              <Nav.Link href="/donationhome">
                {" "}
                <h5>Donation</h5>{" "}
              </Nav.Link>
              <Nav.Link href="/ReliefHome">
                {" "}
                <h5>Relief Provider</h5>{" "}
              </Nav.Link>
              <Nav.Link href="/VictimReqMain">
                {" "}
                <h5>Victim Request</h5>{" "}
              </Nav.Link>
              <Nav.Link>
                <h5>About Us </h5>{" "}
              </Nav.Link>
              </Nav>
              <Form className="d-flex">
            <Button href="/LogIn" variant="outline-success">
              Log&nbsp;In
            </Button>{" "}
            &nbsp;&nbsp;
            <Button href="/RegistrationHome" variant="outline-success">
              Registraion
            </Button>
          </Form>

              </Navbar.Collapse>
            </Container>
          </Navbar>
     
      </div>
    </>
  );
}

export default Header1;
