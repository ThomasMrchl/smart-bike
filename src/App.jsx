import React from "react";
import { Routes, Route } from "react-router-dom"; // Correct import
import Home from "./pages/Home";
import Bikes from "./pages/Bikes";
import Bike from "./pages/Bike";
import Order from "./pages/Order";
import Contact from "./pages/Contact";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bikes" element={<Bikes />} />
            <Route path="/bike/:bikeNbr" element={<Bike />} /> {/* Fixed dynamic route */}
            <Route path="/order" element={<Order />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default App;