import React from "react";
// import './RescueReq.css'
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

export default function Relief2() {
  const navigate = useNavigate();
  const styles = {};
  return (
    <div className="d-flex justify-content-center">
      <div className="pt-5 pb-5 ">
        <Card className="cardstyle">
          <Alert variant="secondary">
            <div className="d-flex justify-content-end mb-4">
              RESCUE PROVIDER ID : 1212
            </div>
            <Alert.Heading className="d-flex justify-content-center">
              RESCUE PROVIDER NAME
            </Alert.Heading>
          </Alert>
          <Card.Body>
            <Card.Title className="d-flex justify-content-center pb-4">
              Requests For Rescue
            </Card.Title>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Request ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark Otto</td>
                  <td>7845144589</td>
                  <td>silchar</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob Thornton</td>
                  <td>9865324578</td>
                  <td>silchar</td>
                </tr>
              </tbody>
            </Table>

            <div className="d-flex justify-content-center">
              <Button
                onClick={() => {
                  navigate("/");
                }}
                variant="success"
              >
                Home
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
