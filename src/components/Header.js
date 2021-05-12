import React from 'react';
import '../App.css'
import logo from '../img/top-logo.png';


export const Header = () => {

    function useToggle(initialValue = false) {
        const [value, setValue] = React.useState(initialValue);
        const toggle = React.useCallback(() => {
          setValue(v => !v);
        }, []);
        return [value, toggle];
      }
    
      const [isOn, toggleIsOn] = useToggle();

    return (
        <div className="header">
            <div className="header-container">
                <div className="logo">
                    <img src={logo} alt=""/>
                    <h2>STAY <span>FIT</span></h2>
                </div>

                <div className="nav-menu">
                    <ul className={isOn ? 'menu active' : 'menu'}>
                        <li className="nav-link active"><a href="#">Home</a></li>
                        <li className="nav-link"><a href="#">About</a></li>
                        <li className="nav-link"><a href="#">Courses</a></li>
                        <li className="nav-link"><a href="#">Pages</a></li>
                        <li className="nav-link"><a href="#">Features</a></li>
                        <li className="nav-link"><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div className={isOn ? 'menu-btn active' : 'menu-btn'}>
                    <i onClick={toggleIsOn}  className="fas fa-bars"></i>
                </div>

                <div className="btn-container">
                    <a href="" className="btn">Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Header;