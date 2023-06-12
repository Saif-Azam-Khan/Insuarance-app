import { useSelector, useDispatch } from "react-redux"; // Importing Redux hooks
import { removePolicy, claimPolicy } from "../../../redux-toolkit/userSlice";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import ButtonGroup from "react-bootstrap/ButtonGroup";
function MyPolicies({ currentUser }) {
  const allDetails = [...useSelector((state) => state.allDetails)]; // Selecting all details from the state using useSelector hook and spreading it into an array
  const user = allDetails.find((item) => item.id === currentUser.id); // Finding the current user's details from the allDetails array
  let userp = user.policies; // Getting the policies of the current user
  const dispatch = useDispatch();
  const handleClick = (event) => {
    // The function for handling policy removal
    const id = event.target.id;
    const payload = {
      userId: currentUser.id,
      policyId: id,
    };
    dispatch(removePolicy(payload))
  };
  const handleClaim = (event) => {
    const id = event.target.id;
    const payload = {
      userId: currentUser.id,
      policyId: id,
    };
    dispatch(claimPolicy(payload))
  };

  return (
    <div className="mypolicy-container">
      {userp.map((data) => {
        // Mapping over the user's policies to display them
        return (
          <Card
            style={{ width: "18rem" }}
            className="policy-cards"
            id={data.id}
            key={data.id}
          >
            <Card.Body className="text-wrap">
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{data.description}</Card.Text>
              <Card.Text>Coverage Amount : {data.coverageAmount} $</Card.Text>
              <Card.Text>MonthlyPremium : {data.monthlyPremium} $</Card.Text>
              <br></br>
              <ButtonGroup className="mb-2">
                <Button variant="danger" id={data.id} onClick={handleClick}>
                  Remove Policy
                </Button>
                <Button id={data.id} onClick={handleClaim} disabled={data.claimed}>
                  Claim Policy
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default MyPolicies; // Exporting the component
