
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {updatePolicy} from "../../../redux-toolkit/policiesSlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Card, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";


function ManagePolicies() {
  const [editPolicy, setEditPolicy] = useState(0);
  const [names, setNames] = useState("");
  const [coverageAmount, setCoverageAmount] = useState("");
  const [deductible, setDeductible] = useState("");
  const [monthlyPremium, setMonthlyPremium] = useState("");
  const [description, setDescription] = useState("");

  const allPolicies = useSelector((state) => state.allPolicies)
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setEditPolicy(event.target.id-1);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPayload = {
      id: editPolicy,
      name: names,
      description: description,
      coverageAmount: coverageAmount,
      deductible: deductible,
      monthlyPremium: monthlyPremium,
    };
    dispatch(updatePolicy(newPayload));
  };

  const currentPolicies = allPolicies[editPolicy];
  return (
    <>
      <Container>
        <Form>
          <Row>
            <Col>
              {allPolicies.map((item) => {
                return (
                  <div className="d-grid gap-2">
                    <Button
                      id={item.id}
                      variant="primary"
                      size="lg"
                      onClick={handleClick}
                    >
                      {item.name}
                    </Button>
                    <br></br>
                  </div>
                );
              })}
            </Col>
            <Col>
              <div>
                <Card>
                  <Card.Title>Update the policy</Card.Title>
                  <Row>
                    <Col>
                      <h2>Current values</h2>
                      <br></br>

                      <h5>Name: {currentPolicies.name}</h5>
                      <br></br>
                      <br></br>
                      <h5>
                        Coverage Amount: {currentPolicies.coverageAmount} $
                      </h5>
                      <br></br>
                      <br></br>
                      <h5>Deductible: {currentPolicies.deductible} $</h5>
                      <br></br>
                      <br></br>
                      <h5>
                        Monthly Premium: {currentPolicies.monthlyPremium} $
                      </h5>
                      <br></br>
                      <h5>Description: {currentPolicies.description}</h5>
                    </Col>
                    <Col>
                      <h2>Updated values</h2>
                      <br></br>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Update Name"
                        className="mb-3"
                        onChange={(event) => setNames(event.target.value)}
                      >
                        <Form.Control type="text" required minlength="5"/>
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Update Coverage Amount"
                        className="mb-3"
                        onChange={(event) =>
                          setCoverageAmount(event.target.value)
                        }
                      >
                        <Form.Control type="number" required minlength="2"/>
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Update Deductible Amount"
                        className="mb-3"
                        onChange={(event) => setDeductible(event.target.value)}
                      >
                        <Form.Control type="number" required minlength="2"/>
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Update Monthly Premium"
                        className="mb-3"
                        onChange={(event) =>
                          setMonthlyPremium(event.target.value)
                        }
                      >
                        <Form.Control type="number" required minlength="2"/>
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Update Description"
                        className="mb-3"
                        onChange={(event) => setDescription(event.target.value)}
                      >
                        <Form.Control type="text" as="textarea" required minlength="10"/>
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Button
                    // variant="outline-secondary"
                    type="submit"
                    onSubmit={handleSubmit}
                  >
                    Update the policy
                  </Button>
                </Card>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
export default ManagePolicies;






