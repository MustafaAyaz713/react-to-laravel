import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./src/Login/Background/Background";
import Login from "./src/Login/LoginComponent/Login";
import HomePage from "./src/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login ve Background birleşimi */}
        <Route
          path="/"
          element={
            <>
              <Background />
              <Login />
            </>
          }
        />
        {/* HomePage */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
