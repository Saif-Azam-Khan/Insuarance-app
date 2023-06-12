import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import LoginForm from "./components/LoginForm";
import CustomerView from "./components/coustomer_view/CustomerView";
import AdminView from "./components/admin_view/AdminView.js";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [status, setStatus] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const update = (value) => {
    setCurrentUser(value);
    navigate(`/${value.role}/allpolicies`);
  };
  const loginSucessful = () => {
    setShowAlert(true);
    setStatus(true)
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  const loginFailed = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
    <div className="App">
      {showAlert && <Alert  variant={status?'success':"danger"}>
          Authentication {status?'success':"failed"} !
        </Alert>}
      <Routes path="/">
        <Route
          path="/"
          element={
            <LoginForm
              update={update}
              loginSucessful={loginSucessful}
              loginFailed={loginFailed}
            />
          }
        />
        <Route
          path="/customer/*"
          element={<CustomerView currentUser={currentUser} />}
        />
        <Route path="/admin/*" element={<AdminView/>} />
      </Routes>
    </div>
  );
}

export default App;
