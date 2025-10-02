import styled, { keyframes } from "styled-components";

// Gradient animation keyframes
const gradientAnimation = keyframes`
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
`;

// Wave animation keyframes
const waveAnimation = keyframes`
    2% {
        transform: translateX(1%);
    }
    25% {
        transform: translateX(-25%);
    }
    50% {
        transform: translateX(-50%);
    }
    75% {
        transform: translateX(-25%);
    }
    100% {
        transform: translateX(1%);
    }
`;

// Main container with gradient background
const HomeContainer = styled.div`
    height: 100vh; /* Full viewport height */
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    overflow: hidden;
    background: linear-gradient(
        135deg,
        #43D27F 0%, /* Light green */
        #1E5F3F 25%, /* Darker green */
        #1289ea 50%, /* Dark blue */
        #090D15 90% /* Deep dark blue */
    );
    animation: ${gradientAnimation} 15s ease infinite;
    background-size: 400% 400%;
    background-attachment: fixed;
    position: relative;
`;

// Title styling
const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    color: white;
    z-index: 2; /* Ensure the title is above the waves */
`;

// Wave styling
const Wave = styled.div`
    background: rgba(255, 255, 255, 0.15); /* Subtle white overlay */
    border-radius: 1000% 1000% 0 0;
    position: fixed;
    width: 200%;
    height: 12em;
    animation: ${waveAnimation} 10s -3s linear infinite;
    transform: translate3d(0, 0, 0);
    opacity: 0.8;
    bottom: 0;
    left: 0;
    z-index: -1;

    &:nth-of-type(2) {
        bottom: -1.25em;
        animation: ${waveAnimation} 18s linear reverse infinite;
        opacity: 0.7;
    }

    &:nth-of-type(3) {
        bottom: -2.5em;
        animation: ${waveAnimation} 20s -1s reverse infinite;
        opacity: 0.6;
    }
`;

function Home() {
    return (
        <HomeContainer>
            <Title>Discover the new Bike 5, available now!</Title>
            <Wave />
            <Wave />
            <Wave />
        </HomeContainer>
    );
}

export default Home;