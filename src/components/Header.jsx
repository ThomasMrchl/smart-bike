import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const bikeAnimation = keyframes`
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    50% {
        transform: translateX(10%);
        opacity: 1;
    }
    100% {
        transform: translateX(0%);
        opacity: 0;
    }
`;

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #0A1015;
    padding-bottom: 15px;
    padding-top: 15px;
    position: relative; 
`;

const LogoContainer = styled.div`
    position: relative; 
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BikeComingText = styled.div`
    position: absolute;
    top: -10px; 
    right: -10px;
    font-size: 0.8rem;
    color: #30A9FF; 
    font-family: 'Orbitron', sans-serif;
    text-transform: uppercase;
    animation: ${bikeAnimation} 6s infinite; 
    opacity: 0; 
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 2.5rem;
    color: #30B759; 
    margin-bottom: 5px;
    font-family: 'Orbitron', sans-serif;
    text-transform: uppercase;
`;

const NavMenu = styled.div`
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
`;

const NavItem = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    color: ${(props) => (props.active ? '#30B759' : "#e0ffe7")};
    font-family: 'Orbitron', sans-serif;
    text-transform: uppercase;
    transition: color 0.3s ease;

    &:hover {
        color: #30B759;
    }
`;

function Header() {
    const location = useLocation();

    return (
        <HeaderContainer>
            <LogoContainer>
                <Title>SmartBike</Title>
                <BikeComingText>New Bike 5 UP !</BikeComingText>
            </LogoContainer>
            <NavMenu>
                <NavItem
                    to="/"
                    active={location.pathname === '/'}
                >
                    Home
                </NavItem>
                <NavItem
                    to="/bikes"
                    active={location.pathname === '/bikes'}
                >
                    Bikes
                </NavItem>
                <NavItem
                    to="/contact"
                    active={location.pathname === '/contact'}
                >
                    Contact
                </NavItem>
            </NavMenu>
        </HeaderContainer>
    );
}

export default Header;