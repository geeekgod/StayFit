import React from 'react';
import '../App.css';
import about_img from '../img/about.png';

export const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="img-container">
                    <img src={about_img} alt=""/>
                </div>
                <div className="txt-container">
                    <h2>About Us</h2>
                    <p className="lead">Flank shank burgdoggen pork belly swine frankfurter kielbasa salami ham andoulli beef ribs chuck. Flank shank burgdoggen pork belly swine frankfurter kielbasa salami ham andoulli beef ribs chuck.</p>
                    <p className="lead">Flank shank burgdoggen pork belly swine frankfurter kielbasa salami ham andoulli beef ribs chuck. Flank shank burgdoggen pork belly swine frankfurter kielbasa salami ham andoulli beef ribs chuck.</p>
                    <div className="btn-container">
                    <a href="" className="btn">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;