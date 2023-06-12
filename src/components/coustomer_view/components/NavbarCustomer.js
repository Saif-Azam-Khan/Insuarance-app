// Importing necessary components and hooks from react-bootstrap and react-redux library
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";

// A functional component that displays the navbar for a customer view
function NavbarCustomer({ currentUser }) {
  const navigate = useNavigate();

  // Retrieving all details of all customers from the state using the useSelector hook and storing it in the allDetails variable
  const allDetails = [...useSelector((state) => state.allDetails)];

  // Finding the current user's details by matching the id with currentUser.id and storing it in user variable
  const user=allDetails.find((item)=>item.id===currentUser.id);

  // Extracting all policies of the current user from user object and storing it in userp variable
  let userp=user.policies

  return (
    <div className="customer-view-container">
      {/* Defining the navbar */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* Defining the navigation links */}
              <Nav.Link onClick={()=>navigate("/customer/allpolicies")}>All policies</Nav.Link>
              <Nav.Link onClick={()=>navigate("/customer/mypolicies")}>My policies</Nav.Link>
              <Nav.Link onClick={()=>navigate("/customer/moneyTransfer")}>Transfer money</Nav.Link>
            </Nav>
            {/* Defining the dropdown menu for profile information */}
            <Nav>
              <Dropdown drop="start">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Profile
                </Dropdown.Toggle>
                <Dropdown.Menu drop="end">
                  <Dropdown.Item size="lg">
                    <Card style={{ width: "18rem" }} inline>
                      {/* Displaying the customer details using Card component */}
                      <Card.Body className="text-wrap">
                        <Card.Title>Hello {user.name} !</Card.Title>
                        <Card.Text>My policies : {userp.length}</Card.Text>
                        <Card.Text>Claims:</Card.Text>
                        <Card.Text>My balance: {user.balance} $</Card.Text>
                      </Card.Body>
                    </Card>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarCustomer;