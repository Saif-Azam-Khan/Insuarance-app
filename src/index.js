import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

// Creates a React root instance and assigns it to the 'root' constant,
// using the DOM element with ID 'root' as its container.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renders the application component within the React root, providing 
// additional features such as strict mode for improved error checking, 
// a Redux provider for state management, and a browser router for 
// client-side routing. The App component is the top-level component of 
// the application.
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
