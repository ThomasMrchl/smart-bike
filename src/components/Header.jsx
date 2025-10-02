import React, { useState } from 'react';
import styled from 'styled-components';
import Logopng from "../assets/logo-png.png";

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    padding-bottom: 15px;
    padding-top: 15px;
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
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
`;

const NavItem = styled.div`
    cursor: pointer;
    font-size: 1.2rem;
    color: white;
    font-family: 'Orbitron', sans-serif;
    text-transform: uppercase;
    transition: color 0.3s ease;

    &:hover {
        color: #30B759;
    }
`;

function Header() {
    const [activeMenu, setActiveMenu] = useState('Home');

    return (
        <HeaderContainer>
            <Title>SmartBike</Title>
            <NavMenu>
                <NavItem
                    active={activeMenu === 'Home'}
                    onClick={() => setActiveMenu('Home')}
                >
                    Home
                </NavItem>
                <NavItem
                    active={activeMenu === 'Bikes'}
                    onClick={() => setActiveMenu('Bikes')}
                >
                    Bikes
                </NavItem>
                <NavItem
                    active={activeMenu === 'Contact'}
                    onClick={() => setActiveMenu('Contact')}
                >
                    Contact
                </NavItem>
            </NavMenu>
        </HeaderContainer>
    );
}

export default Header;