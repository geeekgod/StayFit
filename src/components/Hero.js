import React from 'react'
import '../App.css'
import hero_img from '../img/hero-top.png';

export const Hero = () => {
    return (
        <div className="Hero">
            <div className="txt-container">
                <h1>Let's Build <br/> Your <span>Shape</span></h1>
                <p className="lead">Flank shank burgdoggen pork belly swine frankfurter kielbasa salami ham andoulli beef ribs chuck.Flank shank burgdoggen pork belly swine frankfurter kielbasa salami ham andoulli beef ribs chuck.</p>
                <a href="" className="btn">Join Now</a>
            </div>
            <div className="img-container">
                <img src={hero_img} alt=""/>
            </div>
        </div>
    )
}

export default Hero;