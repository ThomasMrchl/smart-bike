import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import Bike from "../assets/new-bike5.png";

const bikes = [
  { name: "BikeFirst", displayName: "BikeFirst", price: 1799, image: "/assets/bike5.png" },
  { name: "Bike22", displayName: "Bike22", price: 2299, image: "/assets/bike5.png" },
  { name: "BikeOne", displayName: "BikeOne", price: 2799, image: "/assets/bike5.png" },
  { name: "Bike5", displayName: "Bike5", price: 3499, image: "/assets/bike5.png" },
];

const ShopWrapper = styled.div`
  min-height: 100vh;
  background: #0a1015;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0 60px 0;
`;

const BackLink = styled(Link)`
  color: #30a9ff;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
    color: #43d27f;
  }
`;

const CartCard = styled.div`
  background: rgba(10, 16, 21, 0.97);
  border-radius: 1rem;
  padding: 1rem;
  max-width: 850px;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BikeImage = styled.img`
  width: 240px;
  height: auto;
  margin-bottom: 1.2rem;
  filter: drop-shadow(0 8px 32px rgba(48, 169, 255, 0.13));
`;

const BikeName = styled.h1`
  color: #30a9ff;
  font-family: "Orbitron", sans-serif;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const BikePrice = styled.div`
  font-size: 1.5rem;
  color: #43d27f;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  font-size: 1.05rem;
  border: 1px solid rgba(48, 169, 255, 0.25);
  border-radius: 0.7rem;
  background: rgba(20, 26, 32, 0.95);
  color: #e0ffe7;
  transition: border-color 0.2s;
  &:focus {
    outline: none;
    border-color: #43d27f;
  }
`;

const Summary = styled.div`
  border-top: 1px solid rgba(48, 169, 255, 0.2);
  margin-top: 2rem;
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  color: #e0ffe7;
  font-size: 1.1rem;
  width: 100%;
  max-width: 400px;
`;

const ActionButton = styled.button`
  display: inline-block;
  padding: 0.9em 1.3em;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(90deg, #30a9ff 60%, #43d27f 100%);
  border: none;
  border-radius: 2em;
  text-decoration: none;
  transition: background 0.18s, transform 0.15s;
  margin-top: 2rem;
  cursor: pointer;
  &:hover {
    background: linear-gradient(90deg, #43d27f 60%, #30a9ff 100%);
    transform: scale(1.02);
  }
`;

const ThankYouMessage = styled.div`
  margin-top: 2.5rem;
  color: #43d27f;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
`;

function ShopPage() {
  const { model } = useParams();
  const bike = bikes.find((b) => b.name.toLowerCase() === (model || "").toLowerCase());
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "" });
  const [purchased, setPurchased] = useState(false);

  if (!bike) {
    return (
      <ShopWrapper>
        <BackLink to="/bikes">← Back to bikes</BackLink>
        <CartCard>
          <BikeName>Bike not found</BikeName>
          <BikePrice>Please return to the bikes list.</BikePrice>
        </CartCard>
      </ShopWrapper>
    );
  }

  const shipping = 49;
  const total = bike.price + shipping;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill out all fields before proceeding.");
      return;
    }

    //we simulate the user successful payment but we do not go further in this demo
    setPurchased(true);
  };

  return (
    <ShopWrapper>
      <BackLink to="/bikes">← Back to bikes</BackLink>

      <CartCard>
        <BikeImage src={Bike} alt={bike.displayName} />
        <BikeName>{bike.displayName}</BikeName>
        <BikePrice>{bike.price.toLocaleString("fr-FR")} €</BikePrice>

        {!purchased ? (
          <>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <Summary>
                <span>Shipping:</span>
                <span>{shipping.toLocaleString("fr-FR")} €</span>
              </Summary>
              <Summary>
                <strong>Total:</strong>
                <strong>{total.toLocaleString("fr-FR")} €</strong>
              </Summary>
              <ActionButton type="submit">Proceed to Card Payment</ActionButton>
            </Form>
          </>
        ) : (
          <ThankYouMessage>✅ Thank you for your command!</ThankYouMessage>
        )}
      </CartCard>
    </ShopWrapper>
  );
}

export default ShopPage;
