import React from "react";
// import './FoodReq.css'
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

export default function Relief3() {
  const navigate = useNavigate();
  const styles = {
 
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="pt-5 pb-5">
      <Card className="cardstyle">
          <Alert variant="secondary">
            <div className="d-flex justify-content-end mb-4">
              RELIEF PROVIDER ID : 1212
            </div>
            <Alert.Heading className="d-flex justify-content-center">
              RELIEF PROVIDER NAME
            </Alert.Heading>
          </Alert>
          <Card.Body>
            <Card.Title className="d-flex justify-content-center pb-3">
              Requests For Food & Medical
            </Card.Title>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Type of Request</th>
                  <th>City</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark Otto</td>
                  <td>Food</td>
                  <td>silchar</td>
                  <td>
                    <Button  variant="success" type="submit" size="sm">
                      Details
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>sonam</td>
                  <td>wankum</td>
                  <td>silchar</td>
                  <td>
                    <Button variant="success" type="submit" size="sm">
                      Details
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <Button variant="success" type="submit" size="sm">
                      Details
                    </Button>
                  </td>
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
