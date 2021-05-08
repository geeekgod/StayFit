import React from 'react';
import '../App.css'
import logo from '../img/top-logo.png';


export const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="logo">
                    <img src={logo} alt=""/>
                    <h2>STAY <span>FIT</span></h2>
                </div>

                <div className="nav-menu">
                    <ul className="menu">
                        <li className="nav-link active"><a href="#">Home</a></li>
                        <li className="nav-link"><a href="#">About</a></li>
                        <li className="nav-link"><a href="#">Courses</a></li>
                        <li className="nav-link"><a href="#">Pages</a></li>
                        <li className="nav-link"><a href="#">Features</a></li>
                        <li className="nav-link"><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div className="menu-btn">
                    <i  class="fas fa-bars"></i>
                </div>

                <div className="btn-container">
                    <a href="" className="btn">Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Header;