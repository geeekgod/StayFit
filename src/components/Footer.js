import React from 'react'
import logo from '../img/top-logo.png';

export const Footer = () => {
    return (
        <footer className="footer">

            <div className="foot-cont">
                <div className="first-cont">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <h2>STAY <span>FIT</span></h2>
                    </div>
                    <p className="lead">
                        Flank shank burgdoggen pork belly swine <br /> franfurter kielbasa salami <br /> ham andoulli beef ribs chuck. <br /> lank shank
                    </p>
                </div>
                <div className="second-cont">
                    <h4>Quick Contacts</h4>
                    <div className="add">
                        <i class="fas fa-map-pin"></i>
                        <p className="info">1010 santa monica  boulevard <br /> log angeles</p>
                    </div>
                    <div className="mail">
                        <i class="fas fa-location-arrow"></i>
                        <p className="info">info@example.com</p>
                    </div>
                </div>
                <div className="third-cont">
                    <div className="phone">
                        <i class="fas fa-phone"></i>
                        <p className="info">+668-554-868-XXX</p>
                    </div>
                    <div className="social">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-youtube"></i>
                    </div>
                </div>
            </div>

            <div className="foot-menu">
                <div className="wrapper">
                    
                    <ul className="footnav-menu">
                        <li>Home</li>
                        <li>About</li>
                        <li>Courses</li>
                        <li>Pages</li>
                        <li>Features</li>
                        <li>Blog</li>
                    </ul>

                    <div className="foot-txt">
                        <p>© COPYRIGHT 2021 ALL RIGHT RESERVED</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;