import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';

function AllUsers() {
    const allUsers= useSelector((state)=>state.allDetails).filter((item)=>item.role==="customer")

    return ( <div>
        {allUsers.map((item)=>{return(
            <Card style={{ width: '18rem' }} className="policy-cards">
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
              Balance: {item.balance} $
              </Card.Text>
              <Card.Text>
              Policies owned: 
              </Card.Text>
              
              
               {item.policies.map((item)=>{
                return(
                  <p>{item.name}</p>
                )
               })} 
             
            </Card.Body>
          </Card>)
        })}
    </div> );
}

export default AllUsers;