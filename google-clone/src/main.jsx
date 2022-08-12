import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ResultContextProvider } from "./contexts/ResultContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ResultContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ResultContextProvider>
);
