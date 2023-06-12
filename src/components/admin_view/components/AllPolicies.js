import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
function AllPolicies() {
  const allPolicies = useSelector((state) => state.allPolicies);

  return (
    <div>
      {allPolicies.map((data) => {
        return (
          <Card
            style={{ width: "18rem" }}
            className="policy-cards"
            id={data.id}
          >
            <Card.Body className="text-wrap">
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{data.description}</Card.Text>
              <Card.Text>Coverage Amount : {data.coverageAmount} $</Card.Text>
              <Card.Text>MonthlyPremium : {data.monthlyPremium} $</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default AllPolicies;
