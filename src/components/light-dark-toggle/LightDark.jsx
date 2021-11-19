import React from 'react';
import "./LightDark.css";

const LightDark = ({ mode }) => {

    return (
        <div className="light-dark-container">
            <div className={mode ? 'light-dark-toggle light' : 'light-dark-toggle dark'}></div>
            <span className={mode ? 'active' : ''}>Light</span>
            <span className={!mode ? 'active' : ''}>Dark</span>
        </div>
    )
}

export default LightDark;