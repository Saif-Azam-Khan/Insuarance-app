import React, { useState } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Table from "react-bootstrap/Table";

function ManageUsers() {
  const [editUser, setEditUser] = useState(0); // state to store index of selected user

  // get all users from Redux store and filter out non-customers
  const allUsers = useSelector((state) => state.allDetails).filter(
    (item) => item.role === "customer"
  ); 

  const handleClick = (event) => {
    setEditUser(event.target.id - 1); // set the index of user based on clicked button
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
          <br></br>

            {/* display buttons for all users */}
            <div className="left-side">
              {allUsers.map((item) => {
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
            </div>
          </Col>
          <Col>
            {/* display selected user's details in table */}
            {/* also use conditional rendering to check if policies exist for the user */}
            <h1>User details</h1>
            <div style={{ width: "18rem" }}></div>
            <h2>{allUsers[editUser].name}</h2>

            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>PolicyName</th>
                  <th>Claimed </th>
                </tr>
              </thead>
              <tbody>
                {allUsers[editUser].policies.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.claimed ? "Claimed" : "Not Claimed"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col>
            {/* display policies that are claimed for selected user */}
            {/* also include buttons to approve or reject claims */}
            {allUsers[editUser].policies
              .filter((item) => item.claimed === true)
              .map((item) => {
                return (
                  <div>

                    <Card>
                      <Card.Body>
                       {item.name}
                      </Card.Body>
                      <ButtonGroup>
                        <Button variant="success" onClick={()=>{alert("This claim is Approved");}}>Approve</Button>
                        <Button variant="danger"onClick={()=>alert("This claim is Rejected")}>Reject</Button>
                      </ButtonGroup>
                    </Card>
                    <br></br>
                  </div>
                );
              })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ManageUsers;