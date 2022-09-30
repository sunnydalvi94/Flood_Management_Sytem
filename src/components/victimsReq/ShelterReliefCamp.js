import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ShelterReliefCamp() {
  const navigate = useNavigate();
  const styles = {
    tbl: {
      fontFamily: "arial, sans-serif",
      borderCollapse: "collapse",
      width: "90%",
    },

    th: {
      border: "1px solid red",
      textAlign: "left",
      padding: "8px",
    },
    cardstyle: {
      width: "50rem",
      marginBottom: "40rem",
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
                SHELTER RELIEF CAMP
              </Alert.Heading>
            </Alert>
            <div className="p-3">
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>Sr.No.</th>
                    <th>Camp Name</th>
                    <th>Location</th>
                    <th>Available Bed</th>
                    <th>Select</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Camp1</td>
                    <td>Silchar</td>
                    <td>15</td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => {
                          navigate("/ShelterBooking");
                        }}
                        size="sm"
                      >
                        Select
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Camp2</td>
                    <td>Silchar</td>
                    <td>22</td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => {
                          navigate("/ShelterBooking");
                        }}
                        size="sm"
                      >
                        Select
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Camp3</td>
                    <td>Silchar</td>
                    <td>13</td>
                    <td>
                      <Button 
                        variant="success"
                        onClick={() => {
                          navigate("/ShelterBooking");
                        }}
                        size="sm"
                      >
                        Select
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ShelterReliefCamp;
