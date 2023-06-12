import AllPolicies from "./components/AllPolicies";
import AllUsers from "./components/AllUsers";
import ManageUsers from "./components/ManageUsers"
import ManagePolicies from "./components/ManagePolicies"
import NavbarAdmin from "./components/NavbarAdmin";
import { Routes, Route } from "react-router-dom";


import "./AdminView.css";

function AdminView() {
  return (
    <div className="adminView-container">
      <NavbarAdmin />
      <Routes path="/admin/*">
        <Route path="/allusers" element={<AllUsers />}/>
        <Route path="/allpolicies" element={<AllPolicies />}/>
        <Route path="/manageusers" element={<ManageUsers />}/>
        <Route path="/managepolicies" element={<ManagePolicies />}/>

      </Routes>
    </div>
  );
}

export default AdminView;
