import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </Router>,
  document.getElementById("root")
);
