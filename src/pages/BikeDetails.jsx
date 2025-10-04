import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import Bike from "../assets/new-bike5.png";

const bikes = [
  {
    name: "BikeFirst",
    displayName: "BikeFirst",
    price: "€1,799",
    battery: "60km",
    weight: "20kg",
    smartApp: false,
    gps: false,
    antiTheft: false,
    fastCharge: false,
    colorOptions: "1",
    display: "Basic",
    lights: "Standard",
    warranty: "2 years",
    image: "/assets/bike5.png",
    description:
      "BikeFirst is the perfect entry-level smart bike: robust, reliable, and easy to use. Ideal for daily commutes and short city rides.",
  },
  {
    name: "Bike22",
    displayName: "Bike22",
    price: "€2,299",
    battery: "75km",
    weight: "19kg",
    smartApp: false,
    gps: false,
    antiTheft: true,
    fastCharge: false,
    colorOptions: "2",
    display: "Basic",
    lights: "LED",
    warranty: "2 years",
    image: "/assets/bike5.png",
    description:
      "Bike22 adds extra security and range, making it a great choice for those who want more peace of mind and flexibility in their rides.",
  },
  {
    name: "BikeOne",
    displayName: "BikeOne",
    price: "€2,799",
    battery: "90km",
    weight: "18.5kg",
    smartApp: true,
    gps: true,
    antiTheft: true,
    fastCharge: false,
    colorOptions: "3",
    display: "LCD",
    lights: "LED",
    warranty: "3 years",
    image: "/assets/bike5.png",
    description:
      "BikeOne is a versatile smart bike with app connectivity and navigation, perfect for tech-savvy riders who want more control and features.",
  },
  {
    name: "Bike5",
    displayName: "Bike5",
    price: "€3,499",
    battery: "120km",
    weight: "17kg",
    smartApp: true,
    gps: true,
    antiTheft: true,
    fastCharge: true,
    colorOptions: "5",
    display: "Touchscreen",
    lights: "Auto LED",
    warranty: "4 years",
    image: "/assets/bike5.png",
    description:
      "Bike5 is our flagship model: the most advanced, powerful, and stylish smart bike. Enjoy the longest range, fastest charging, and all the latest features.",
  },
];

const DetailsWrapper = styled.div`
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

/* 🌟 NEW: a container that splits left and right */
const BikeLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  background: rgba(10, 16, 21, 0.97);
  border-radius: 1.5rem;
  padding: 2.5rem;
  max-width: 1100px;
  width: 95vw;
  gap: 3rem;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const RightSide = styled.div`
  flex: 1.3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const BikeImage = styled.img`
  width: 280px;
  height: auto;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 8px 32px rgba(48, 169, 255, 0.13));
`;

const BikeName = styled.h1`
  color: #30a9ff;
  font-family: "Orbitron", sans-serif;
  font-size: 2.2rem;
  margin-bottom: 0.7rem;
  text-align: center;
`;

const BikeDesc = styled.p`
  color: #e0ffe7;
  font-size: 1.18rem;
  margin-bottom: 1.7rem;
  text-align: left;
`;

const SpecsTable = styled.table`
  width: 100%;
  margin-bottom: 2rem;
  border-collapse: collapse;
  td {
    padding: 0.6em 0.5em;
    color: #b8b8b8;
    font-size: 1.07rem;
  }
  td:first-child {
    color: #30a9ff;
    font-weight: 600;
    width: 48%;
  }
  td:last-child {
    color: #e0ffe7;
    font-weight: 500;
    width: 52%;
    text-align: right;
  }
`;

const Price = styled.div`
  font-size: 1.7rem;
  color: #43d27f;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const ActionButton = styled(Link)`
  padding: 0.7em 2em;
  font-size: 1.13rem;
  width: fit-content;
  display: flex;
  align-self: right;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(90deg, #30a9ff 60%, #43d27f 100%);
  border: none;
  border-radius: 2em;
  cursor: pointer;
  text-decoration: none;
  &:hover,
  &:focus {
    background: linear-gradient(90deg, #43d27f 60%, #30a9ff 100%);
    color: #fff;
  }
`;

function BikeDetails() {
  const { name } = useParams();
  const bike = bikes.find(
    (b) => b.name.toLowerCase() === (name || "").toLowerCase()
  );

  if (!bike) {
    return (
      <DetailsWrapper>
        <BackLink to="/bikes">← Back to all bikes</BackLink>
        <BikeName>Bike not found</BikeName>
      </DetailsWrapper>
    );
  }

  return (
    <DetailsWrapper>
      <BackLink to="/bikes">← Back to all bikes</BackLink>

      <BikeLayout>
        <LeftSide>
          <BikeImage src={Bike} alt={bike.displayName} />
          <BikeName>{bike.displayName}</BikeName>
        </LeftSide>

        <RightSide>
          <BikeDesc>{bike.description}</BikeDesc>
          <SpecsTable>
            <tbody>
              <tr>
                <td>Battery Range</td>
                <td>{bike.battery}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{bike.weight}</td>
              </tr>
              <tr>
                <td>Smartphone App</td>
                <td>{bike.smartApp ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>GPS Navigation</td>
                <td>{bike.gps ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>Anti-Theft</td>
                <td>{bike.antiTheft ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>Fast Charging</td>
                <td>{bike.fastCharge ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <td>Color Options</td>
                <td>{bike.colorOptions}</td>
              </tr>
              <tr>
                <td>Display</td>
                <td>{bike.display}</td>
              </tr>
              <tr>
                <td>Lights</td>
                <td>{bike.lights}</td>
              </tr>
              <tr>
                <td>Warranty</td>
                <td>{bike.warranty}</td>
              </tr>
            </tbody>
          </SpecsTable>
          <Price>{bike.price}</Price>
          <ActionButton to={`/shop/${bike.name}`}>Purchase</ActionButton>
        </RightSide>
      </BikeLayout>
    </DetailsWrapper>
  );
}

export default BikeDetails;
