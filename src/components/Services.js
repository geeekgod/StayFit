import React from 'react';
import '../App.css';
import services_1 from '../img/services-1.png';
import services_2 from '../img/services-2.png';
import services_3 from '../img/services-3.png';

export const Services = () => {
    return (
        <section className="services">
            <div className="txt">
                <h2>Our Services</h2>
                <p className="lead">Flank shank burgdoggen pork belly swine frankfurter kielbasa salami</p>
            </div>
            <div className="service-container">
                <div className="card">
                    <img src={services_1} alt="" />
                    <div className="txt-container">
                        <h3>Body Composition</h3>
                        <p className="lead">Flank shank burgdoggen pork belly swine frankfurter kielbasa salami ham andoulli beef ribs chuck..</p>
                    </div>
                </div>
                <div className="card">
                    <img src={services_2} alt="" />
                    <div className="txt-container">
                    <h3>Personal Training</h3>
                    <p className="lead">Flank shank burgdoggen pork belly swine frankfurter kielbasa salami ham andoulli beef ribs chuck..</p>
                    </div>
                </div>
                <div className="card">
                    <img src={services_3} alt="" />
                    <div className="txt-container">
                    <h3>Spin Cycling</h3>
                    <p className="lead">Flank shank burgdoggen pork belly swine frankfurter kielbasa salami ham andoulli beef ribs chuck..</p>
                    </div>
                </div>
            </div>
            <div className="btn-container">
                <a href="" className="btn">See More</a>
            </div>
        </section>
    )
}
export default Services;