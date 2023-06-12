import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
function NavbarAdmin() {
  const navigate= useNavigate()
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate("/admin/allpolicies")}>All policies</Nav.Link>
            <Nav.Link onClick={()=>navigate("/admin/allusers")}>All users</Nav.Link>
            <Nav.Link onClick={()=>navigate("/admin/manageusers")}>Manage users</Nav.Link>
            <Nav.Link onClick={()=>navigate("/admin/managepolicies")}>Manage policies</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
      <br />
    </div>
  );
}

export default NavbarAdmin;
