import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Stack } from "react-bootstrap";
import { getData } from "../../api/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RequestSlip() {
  const [victimData, setVictims] = useState({});
  console.log("testing");
  useEffect(() => {
    getVictimData();
  }, []);

  const getVictimData = async () => {
    let res = await getData("1");
    console.log(res);
    setVictims(res.data);
  };

  // let victimData = [];
  // victimData = getData("cKS8-aY");
  console.log(victimData);
  const navigate = useNavigate();
  const styles = {
    cardstyle: {
      width: "35rem",
      marginBottom: "50rem",
    },
    formsize: {
      lineHeight: "2rem",
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
                RESCUE REQUEST
              </Alert.Heading>
            </Alert>
            <Form className="mt-1 p-3 " style={styles.formsize}>
              <b>Dear **** **** (4545456)</b>
              <p>
                Thank You ! for using our online portal. Your request details
                are indicated below.
              </p>
           
              <Stack direction="horizontal" gap={5}>
                <div>
                  <b>Request ID :</b> ***
                </div>
                <div>
                  <b> Request Date :</b> ******
                </div>
              </Stack>
              <div>
                <b> Name :</b> **** ****
              </div>
              <div>
                <b> Address :</b>
                {victimData.Address}
              </div>
              <div>
                <b> Contact No. :</b> {victimData.ContactNo}
              </div>
              <div>
                <b> Total Members in Group :</b> {victimData.CountPeople}
              </div>

              <Row className="pt-5">
                <Col>
                  <Button variant="success" type="submit">
                    Print
                  </Button>
                </Col>
                <Col>
                  <span className="d-flex justify-content-end">
                    <Button
                      onClick={(e) => {
                        navigate("/RescueForm");
                      }}
                      variant="success"
                      type="submit"
                    >
                      Back
                    </Button>
                  </span>
                </Col>
              </Row>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
}

export default RequestSlip;
