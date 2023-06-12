import NavbarCustomer from "./components/NavbarCustomer";
import AllPolicies from "./components/AllPolicies";
import MyPolicies from "./components/myPolicies";
import { Routes, Route } from "react-router-dom";


import "./CustomerView.css";
import MoneyTransfer from "./components/moneyTransferView";

function CustomerView({ currentUser }) {

  return (
    <div >
      <NavbarCustomer currentUser={currentUser} />
      <Routes path="/customer/*">
        <Route
          path="/allpolicies"
          element={<AllPolicies currentUser={currentUser} className="customer-view-cards"/>}
        ></Route>
        <Route
          path="/mypolicies"
          element={<MyPolicies currentUser={currentUser} className="customer-view-cards"/>}
        ></Route>
        <Route
          path="/moneyTransfer"
          element={<MoneyTransfer currentUser={currentUser} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default CustomerView;
