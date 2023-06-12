import { useState } from "react";
import { useSelector } from "react-redux";
// Importing Button, Card and Form components from Bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
// Importing CSS styles for LoginForm component
import "./LoginForm.css";

// Defining a functional component named 'LoginForm'
function LoginForm({ loginSucessful, update, loginFailed }) {
  // Declaring and initializing state variables using useState hook
  const [name, setName] = useState("demo");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const allDetails = useSelector((state) => state.allDetails);
  // Defining an event handler function for form submission
  const handleSubmit = () => {
    // Finding the user with the entered name in the data array
    const currentUserName = allDetails.find((user) => user.name === name);
    const currentUserPassword = allDetails.find(
      (user) => user.password === password
    );
    // Checking if there is such a user in the data array
    if (currentUserName && currentUserPassword) {
      // currentUserName.id, currentUserPassword.id

      // Checking if the role of the current user matches the selected role and is 'customer'
      if (currentUserName.role === role && role === "customer") {
        // Checking if the entered password matches the current user's password

        // Calling loginSuccessful() and update() functions passed as props
        update(currentUserName);
        loginSucessful();
      }
      // Checking if the role of the current user matches the selected role and is 'administrator'
      if (currentUserName.role === role && role === "admin") {
        // Checking if the entered password matches the current user's password
        if (currentUserName.password === password) {
          // Calling loginSuccessful() and update() functions passed as props
          update(currentUserName);
          loginSucessful();

          // setView("administrator");
        }
      }
    } else {
      loginFailed();
    }
  };

  // Returning JSX elements for the LoginForm component
  return (
    <Card className="login-form" style={{ width: "18rem" }}>
      <Card.Header>Login Form</Card.Header>
      <Card.Body>
        <Form>
          {/* Radio buttons to select customer/administrator role */}
          <h6>Please choose a role*</h6>
          <div className="mb-3">
            <Form.Check
              inline
              required
              label="Customer"
              name="group1"
              type="radio"
              onClick={() => {
                setRole("customer");
              }}
            />
            <Form.Check
              inline
              required
              label="Admin"
              name="group1"
              type="radio"
              onClick={() => {
                setRole("admin");
              }}
            />
          </div>

          {/* Input field to enter username */}
          <Form.Control
            type="text"
            required
            placeholder="Enter Username*"
            aria-label="Enter Username"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br></br>

          {/* Input field to enter password */}
          <Form.Control
            type="text"
            required
            placeholder="Enter password*"
            aria-label="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br></br>

          {/* Button to submit the form */}

          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

// Exporting the LoginForm component as default export
export default LoginForm;

// import { useHistory } from "react-router-dom";

// function LoginForm({ loginSuccessful, update, loginFailed }) {
//   const history = useHistory(); // initialize useHistory hook

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // ...rest of code
//     if (currentUserName.role === role && role === "customer") {
//       loginSuccessful();
//       update(currentUserName);
//       history.push(`${role}/${name}`); // navigate to desired NavLink
//     }
//     // ...rest of code
//   };

//   return (
//     // ...rest of code
//     <Button type="submit" onClick={handleSubmit}>Submit</Button> // change onSubmit to onClick
//     // ...rest of code
//   );
// }

// const navigate = useNavigate();
// if (currentUserName && currentUserPassword) {
//   // ...
//   if (currentUserName.role === role && role === "customer") {
//     // ...
//     navigate(`/customer/${name}`);
//   }
//   if (currentUserName.role === role && role === "administrator") {
//     // ...

//   }
// } else {
//   loginFailed();
// }
