import logo from '../images/airbnb_logo.png';
import React from 'react';

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="Airbnb Clone Logo" className="nav-logo" />
        </nav>
    )
}