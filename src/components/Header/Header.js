import React from 'react';
import './Header.css';

const Header = props => {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-title">Конвертер валют</h1>
                <div className="header-date">{props.date}</div>
            </div>
        </header>
    )
};

export default Header;