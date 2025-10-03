import styled, { keyframes } from "styled-components";
import bike5 from "../assets/new-bike5.png";
import { FaBolt, FaMapMarkedAlt, FaLock, FaMobileAlt } from "react-icons/fa";

const gradientAnimation = keyframes`
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
`;

const waveAnimation = keyframes`
    2% { transform: translateX(1%); }
    25% { transform: translateX(-25%); }
    50% { transform: translateX(-50%); }
    75% { transform: translateX(-25%); }
    100% { transform: translateX(1%); }
`;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(
        135deg,
        #0A1015 5%,
        #43D27F 25%,
        #30A9FF 50%,
        #090D15 90%
    );
    animation: ${gradientAnimation} 15s ease infinite;
    background-size: 400% 400%;
    background-attachment: fixed;
    padding-top: 10vh;
    position: relative;
    width: 100vw;
    min-height: 100vh; /* Make sure it takes the full viewport height */
    overflow: hidden;
`;

const ContentRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    z-index: 2;
    position: relative;
    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: flex-start;
        gap: 2.5rem;
        padding-top: 3rem;
    }
`;

const BikeImage = styled.img`
    width: 520px;
    max-width: 28vw;
    min-width: 260px;
    margin-right: 3.5rem;
    margin-bottom: 0;
    filter: drop-shadow(0 8px 32px rgba(0,0,0,0.4));
    border-radius: 0;
    background: none;
    @media (max-width: 900px) {
        width: 80vw;
        max-width: 90vw;
        margin-right: 0;
        margin-bottom: 2rem;
    }
`;

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 900px) {
        align-items: center;
        text-align: center;
    }
`;

const Title = styled.h1`
    font-size: 3.2rem;
    color: #fff;
    margin-bottom: 1.2rem;
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-shadow: 0 2px 16px rgba(0,0,0,0.18);
    line-height: 1.1;
`;

const Subtitle = styled.p`
    font-size: 1.35rem;
    color: #e0ffe7;
    margin-bottom: 2.2rem;
    max-width: 420px;
`;

const ShopButton = styled.a`
    display: inline-block;
    padding: 0.95em 2.5em;
    font-size: 1.18rem;
    font-weight: 600;
    color: #fff;
    background: transparent;
    border: 1.5px solid #b6e8d0;
    border-radius: 2em;
    box-shadow: none;
    cursor: pointer;
    text-decoration: none;
    transition: 
        border-color 0.2s,
        color 0.2s,
        background 0.2s,
        transform 0.15s;
    outline: none;
    &:hover, &:focus {
        border-color: #43D27F;
        color: #43D27F;
        background: rgba(67,210,127,0.08);
        transform: translateY(-2px) scale(1.04);
    }
`;

const Wave = styled.div`
    background: rgba(255, 255, 255, 0.15);
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

const BelowSection = styled.section`
    width: 100vw;
    background: rgba(10,16,21,0.97);
    padding: 0 0 64px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
    margin-top: 0; /* Remove any gap */
`;

const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2.5rem;
    width: 90vw;
    max-width: 1100px;
    margin: 0 auto 2.5rem auto;
    padding-top: 3.5rem;
`;

const FeatureCard = styled.div`
    background: rgba(48,169,255,0.07);
    border-radius: 1.5rem;
    padding: 2.2rem 1.5rem 1.7rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 4px 32px 0 rgba(48,169,255,0.07);
    min-height: 220px;
    transition: transform 0.18s, box-shadow 0.18s;
    &:hover {
        transform: translateY(-6px) scale(1.03);
        box-shadow: 0 8px 40px 0 rgba(67,210,127,0.13);
    }
`;

const FeatureIcon = styled.div`
    font-size: 2.2rem;
    color: #30A9FF;
    margin-bottom: 1.1rem;
`;

const FeatureTitle = styled.h3`
    font-size: 1.25rem;
    color: #fff;
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 0.7rem;
    font-weight: 700;
`;

const FeatureDesc = styled.p`
    color: #e0ffe7;
    font-size: 1.05rem;
    line-height: 1.5;
    opacity: 0.92;
`;

const HighlightSection = styled.div`
    width: 90vw;
    max-width: 1100px;
    margin: 0 auto 2.5rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const HighlightTitle = styled.h2`
    font-size: 2.2rem;
    color: #30A9FF;
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 1.1rem;
    font-weight: 700;
`;

const HighlightText = styled.p`
    font-size: 1.25rem;
    color: #e0ffe7;
    margin-bottom: 2.2rem;
    max-width: 700px;
`;

const HeroSection = styled.section`
    width: 100vw;
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    z-index: 2;
`;

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function Home() {
    return (
        <HomeWrapper>
            <HomeContainer>
                <HeroSection>
                    <ContentRow>
                        <BikeImage src={bike5} alt="Bike 5" />
                        <TextContent>
                            <Title>New E-Bike 5</Title>
                            <Subtitle>
                                Experience the future of cycling: sleek design, advanced tech, and unmatched comfort. Ready for your next adventure.
                            </Subtitle>
                            <ShopButton href="/shop">Shop Now</ShopButton>
                        </TextContent>
                    </ContentRow>
                </HeroSection>
                <Wave />
                <Wave />
                <Wave />
            </HomeContainer>
            <BelowSection>
                <HighlightSection>
                    <HighlightTitle>
                        The Smartest Ride of 2025
                    </HighlightTitle>
                    <HighlightText>
                        Discover <b>Bike5</b>: a revolution in urban mobility. Designed for performance, safety, and style, it’s the ultimate companion for city explorers and adventure seekers alike.
                    </HighlightText>
                    <ShopButton href="/shop">Get Yours Now</ShopButton>
                </HighlightSection>
                <FeaturesGrid>
                    <FeatureCard>
                        <FeatureIcon><FaBolt /></FeatureIcon>
                        <FeatureTitle>Ultra-Long Battery</FeatureTitle>
                        <FeatureDesc>
                            Go further with up to <b>120km</b> on a single charge. Fast charging gets you back on the road in no time.
                        </FeatureDesc>
                    </FeatureCard>
                    <FeatureCard>
                        <FeatureIcon><FaMapMarkedAlt /></FeatureIcon>
                        <FeatureTitle>Smart Navigation</FeatureTitle>
                        <FeatureDesc>
                            Integrated GPS and real-time route suggestions keep you on track, wherever you ride.
                        </FeatureDesc>
                    </FeatureCard>
                    <FeatureCard>
                        <FeatureIcon><FaLock /></FeatureIcon>
                        <FeatureTitle>Advanced Security</FeatureTitle>
                        <FeatureDesc>
                            Anti-theft system with remote lock and instant alerts, so your Bike5 is always protected.
                        </FeatureDesc>
                    </FeatureCard>
                    <FeatureCard>
                        <FeatureIcon><FaMobileAlt /></FeatureIcon>
                        <FeatureTitle>App Connected</FeatureTitle>
                        <FeatureDesc>
                            Control every aspect from your phone: stats, lights, security, and more with the Bike5 app.
                        </FeatureDesc>
                    </FeatureCard>
                </FeaturesGrid>
            </BelowSection>
        </HomeWrapper>
    );
}

export default Home;