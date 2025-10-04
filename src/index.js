import "./global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Bikes from "./pages/Bikes";
import BikeDetails from "./pages/BikeDetails";
import ShopPage from "./pages/Shop";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/bikes" element={<Bikes />} />
            <Route path="/bikes/:name" element={<BikeDetails />} />
            <Route path="/shop/:model" element={<ShopPage />} />
        </Routes>
    </Router>
  </React.StrictMode>
);