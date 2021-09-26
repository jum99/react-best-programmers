import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="navbar" >
                <a className="logo" href="/home">Logo</a>
                <div className="nav">
                    <a href="/home">Home</a>
                    <a href="/programmer">Programmer</a>
                    <a href="/about">About</a>
                </div>
            </div>
            <div className="header-human-club">
                <h2>Greatest Programmers Of All Time</h2>
                <p>A good programmer is someone who always looks both ways before crossing a one-way street</p>
                <h4>Highest Monthly Salary: 3070 USD</h4>
            </div>
        </div>
    );
};

export default Header;