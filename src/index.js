import "./global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Bikes from "./pages/Bikes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/bikes" element={<Bikes />} />
        </Routes>
    </Router>
  </React.StrictMode>
);