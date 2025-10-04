import React from "react";
import { Routes, Route } from "react-router-dom"; // Correct import
import Home from "./pages/Home";
import Bikes from "./pages/Bikes";
import BikeDetails from "./pages/BikeDetails";
import ShopPage from "./pages/Shop";
import Contact from "./pages/Contact";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bikes" element={<Bikes />} />
            <Route path="/bikes/:name" element={<BikeDetails />} />
            <Route path="/shop/:model" element={<ShopPage />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default App;