import React from 'react';
import styled from "styled-components";

const bikes = [
    {
        name: "BikeFirst",
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
        image: "/assets/bikefirst.png",
        highlight: false,
    },
    {
        name: "Bike22",
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
        image: "/assets/bike22.png",
        highlight: false,
    },
    {
        name: "BikeOne",
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
        image: "/assets/bikeone.png",
        highlight: false,
    },
    {
        name: "Bike5",
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
        highlight: true,
    },
];

const features = [
    { label: "Model", key: "name" },
    { label: "Image", key: "image" },
    { label: "Battery Range", key: "battery" },
    { label: "Weight", key: "weight" },
    { label: "Smartphone App", key: "smartApp" },
    { label: "GPS Navigation", key: "gps" },
    { label: "Anti-Theft", key: "antiTheft" },
    { label: "Fast Charging", key: "fastCharge" },
    { label: "Color Options", key: "colorOptions" },
    { label: "Display", key: "display" },
    { label: "Lights", key: "lights" },
    { label: "Warranty", key: "warranty" },
    { label: "Price", key: "price" },      // Price before actions
    { label: "Actions", key: "actions" },  // Actions last
];

const Grid = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: #0A1015;
    padding: 15px 0 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    color: #e0ffe7;
    font-family: 'Orbitron', sans-serif;
    font-size: 2.7rem;
    margin-bottom: 0.3rem;
    text-align: center;
`;

const Subtitle = styled.div`
    color: #B8B8B8;
    font-size: 1.3rem;
    margin-bottom: 2.5rem;
    text-align: center;
`;

const Table = styled.div`
    display: grid;
    grid-template-columns: 180px repeat(4, 1fr);
    background: rgba(10,16,21,0.96);
    border-radius: 1.5rem;
    overflow-x: auto;
    min-width: 900px;
    max-width: 1200px;
    @media (max-width: 1100px) {
        min-width: 700px;
        font-size: 0.95rem;
    }
    @media (max-width: 800px) {
        min-width: 400px;
        font-size: 0.85rem;
    }
`;

const HeaderCell = styled.div`
    font-weight: 600;
    color: ${({ highlight }) => highlight ? "#30A9FF" : "#e0ffe7"};
    background: ${({ highlight }) => highlight ? "rgba(48,169,255,0.18)" : "rgba(48,169,255,0.08)"};
    padding: 1.2rem 1rem;
    border-bottom: 1px solid #43D27F;
    font-family: 'Orbitron', sans-serif;
    text-align: center;
    font-size: ${({ highlight }) => highlight ? "1.18em" : "1em"};
`;

const FeatureCell = styled.div`
    color: #B8B8B8;
    padding: 1.1rem 1rem;
    border-bottom: 1px solid rgba(67,210,127,0.13);
    background: ${({ highlight }) => highlight ? "rgba(48,169,255,0.10)" : "transparent"};
    text-align: center;
    font-weight: ${({ highlight }) => highlight ? 600 : 400};
`;

const ImageCell = styled.img`
    width: 70px;
    height: auto;
    margin: 0 auto;
    display: block;
`;

const Check = styled.span`
    color: #43D27F;
    font-size: 1.3em;
    font-weight: bold;
`;

const Cross = styled.span`
    color: #ff4d4f;
    font-size: 1.3em;
    font-weight: bold;
`;

const ActionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7em;
    align-items: center;
    justify-content: center;
`;

const ActionButton = styled.a`
    display: inline-block;
    padding: 0.5em 1.3em;
    font-size: 1em;
    font-weight: 600;
    color: ${({ primary }) => (primary ? "#fff" : "#30A9FF")};
    background: ${({ primary }) =>
        primary
            ? "linear-gradient(90deg, #30A9FF 60%, #43D27F 100%)"
            : "transparent"};
    border: ${({ primary }) => (primary ? "none" : "1.5px solid #30A9FF")};
    border-radius: 2em;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.18s, color 0.18s, border 0.18s;
    margin: 0 0.2em;
    &:hover, &:focus {
        background: ${({ primary }) =>
            primary
                ? "linear-gradient(90deg, #43D27F 60%, #30A9FF 100%)"
                : "rgba(48,169,255,0.08)"};
        color: ${({ primary }) => (primary ? "#fff" : "#43D27F")};
        border-color: #43D27F;
    }
`;

const PriceCell = styled(FeatureCell)`
    font-weight: 700 !important;
    color: #fff;
`;

function Bikes() {
    return (
        <Grid>
            <Title>Compare Our Smart Bikes</Title>
            <Subtitle>Find the perfect bike that fits your needs and lifestyle. Compare features, prices, and more.</Subtitle>
            <Table>
                <HeaderCell>Features</HeaderCell>
                {bikes.map((bike) => (
                    <HeaderCell
                        key={bike.name}
                        highlight={bike.highlight}
                    >
                        {bike.name}
                    </HeaderCell>
                ))}
                {features.map((feature) => (
                    <React.Fragment key={feature.key}>
                        <FeatureCell as="div" style={{ fontWeight: 700, textAlign: "left", background: "rgba(48,169,255,0.04)" }}>
                            {feature.label}
                        </FeatureCell>
                        {bikes.map((bike) => {
                            let value = bike[feature.key];
                            let content = value;
                            if (feature.key === "image") {
                                content = <ImageCell src={value} alt={bike.name} />;
                            } else if (typeof value === "boolean") {
                                content = value ? <Check>✔</Check> : <Cross>✘</Cross>;
                            } else if (feature.key === "actions") {
                                content = (
                                    <ActionsWrapper>
                                        <ActionButton href={`/bikes/${bike.name.toLowerCase()}`}>See Details</ActionButton>
                                        <ActionButton href={`/shop/${bike.name}`} primary>Purchase</ActionButton>
                                    </ActionsWrapper>
                                );
                            }
                            if (feature.key === "price") {
                                return (
                                    <PriceCell key={bike.name + feature.key} highlight={bike.highlight}>
                                        {content}
                                    </PriceCell>
                                );
                            }
                            return (
                                <FeatureCell key={bike.name + feature.key} highlight={bike.highlight}>
                                    {content}
                                </FeatureCell>
                            );
                        })}
                    </React.Fragment>
                ))}
            </Table>
        </Grid>
    );
}

export default Bikes;