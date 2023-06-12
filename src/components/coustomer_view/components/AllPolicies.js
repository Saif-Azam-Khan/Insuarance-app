import { useSelector, useDispatch } from "react-redux";
import { addPolicy } from "../../../redux-toolkit/userSlice";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function AllPolicies({ currentUser }) {
  const allPolicies = [...useSelector((state) => state.allPolicies)];
  const allDetails = [...useSelector((state) => state.allDetails)];
  const user=allDetails.find((item)=>item.id===currentUser.id);

  const dispatch = useDispatch();
  let myPolicies = user.policies;

  const handleClick = (event) => {
    const targetId = event.target.id;
    const actionPayload = {
      policyToAdd: allPolicies[targetId - 1],
      userID: currentUser.id}
    
    if (myPolicies.filter((item) => item.id == targetId).length) {
      alert("This policy is already linked to your account");
    } else {
      dispatch(addPolicy(actionPayload));
      console.log(currentUser.policies.length);
    }
  };
  return (
    <>
      {allPolicies.map((data) => {
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
              <Card.Text>Coverage Amount : {data.coverageAmount}</Card.Text>
              <Card.Text>Deductable: {data.deductible} $</Card.Text>
              <Button variant="info" key={data.id} id={data.id} onClick={handleClick}>
                Add Policy
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default AllPolicies;
