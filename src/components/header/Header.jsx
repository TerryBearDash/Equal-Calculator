import React from 'react';
import Logo from '../../assets/images/logo.svg';
import "./Header.css";

const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <img src={Logo} alt="logo" className="logo" />
            </div>
        </div>
    )
}

export default Header;