import { useState } from "react"; // Importing useState hook from React
import { useSelector, useDispatch } from "react-redux"; // Importing useSelector and useDispatch hooks from React Redux
import Button from "react-bootstrap/Button"; // Importing Button component from React Bootstrap
import Card from "react-bootstrap/Card"; // Importing Card component from React Bootstrap
import Form from "react-bootstrap/Form"; // Importing Form component from React Bootstrap
import { transferMoney } from "../../../redux-toolkit/userSlice"; // Importing transferMoney action creator from Redux Toolkit userSlice slice
import "./moneyTransfer.css"; // Importing CSS file

function MoneyTransfer({ currentUser }) {
  const dispatch = useDispatch(); // Initializing useDispatch hook
  const allDetails = [...useSelector((state) => state.allDetails)]; // Selecting all details from the state using useSelector hook and spreading it into an array
  const user = allDetails.find((item) => item.id === currentUser.id); // Finding the current user from the allDetails array

  const [transferAmount, SetTransferAmount] = useState(0); // Initializing transferAmount state to 0 using useState hook
  const handleClick = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    if (user.balance > transferAmount) { // Checking if user has sufficient balance for the transaction
      dispatch(transferMoney({ id: user.id, amount: transferAmount })); // Dispatching transferMoney action with user's id and transfer amount as payload
      alert("Transaction done !"); // Displaying success message in an alert box
      SetTransferAmount(""); // Resetting transferAmount state to empty string
    } else {
      alert("Not sufficient funds"); // Displaying error message in an alert box
    }
    
  };
  return (
      <Card className="moneyTransfer-container">
        <Card.Body>
          <Form style={{ width: "50rem" }}>
            <h3>Enter Account number</h3> 
            <Form.Control
              required // Make the field required to submit the form
              size="lg" // Set the display size of the input field to large
              type="number" // Set the input field type to numeric only
              placeholder="Account number" // Placeholder text inside the input field
            />
            <h3>Enter amount</h3>
            <Form.Control
              required // Make the field required to submit the formr
              onChange={(e) => {
                SetTransferAmount(e.target.value); // Function to set the value of transferAmount state variable when the input changes
              }}
              size="lg" // Set the display size of the input field to large
              type="number" // Set the input field type to numeric only
              placeholder="Amount" // Placeholder text inside the input field
              value={transferAmount} // Value of the input field set to the value of transferAmount state variable
            />
            <h3>Enter benificiary's name</h3>
            <Form.Control
              required // Make the field required to submit the form
              size="lg" // Set the display size of the input field to large
              type="text" // Set the input field type to plain text
              placeholder="Benificiary's name" // Placeholder text inside the input field
            />
            <h3>Enter your password</h3>
            <Form.Control
              required // Make the field required to submit the form
              size="lg" // Set the display size of the input field to large
              type="text" // Set the input field type to plain text
              placeholder="Password" // Placeholder text inside the input field
            />
            <br></br> 
            <div className="d-grid gap-2"> 
              <Button
                variant="primary" // Primary color variant of the button
                size="lg" // Set the display size of the button to large
                type="submit" // Set the button type to submit
                onClick={handleClick} // Function to handle click event on the button
              >
                Transfer money
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    );
  }
  
  export default MoneyTransfer; // Exporting the component for use in other parts of the application.


  