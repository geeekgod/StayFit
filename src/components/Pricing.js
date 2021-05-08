import React from 'react';
import '../App.css';

export const Pricing = () => {
    return (
        <section className="pricing">
            <div className="txt-container">
                <h2>Our Pricing Plan</h2>
                <p className="lead">Flank shank burgdoggen pork belly swine frankfurter kielbasa salami</p>
            </div>
            <div className="card-container">
                <div className="card-pseudo">
                    <div className="card">
                        <h3>$8 <span className="slash">/</span> <span className="month">month</span></h3>
                        <p className="head">One Day Training</p>
                        <p className="info">Onetime access to all clubs</p>
                        <hr/>
                        <p className="info">Group trainer</p>
                        <hr/>
                        <p className="info">Book a group class</p>
                        <hr/>
                        <p className="info last">Fitness orientation</p>
                    </div>
                </div>
                <div className="card-pseudo">
                    <div className="card">
                    <h3>$49 <span className="slash">/</span> <span className="month">month</span></h3>
                        <p className="head">12 Months Membership</p>
                        <p className="info">Group class</p>
                        <hr/>
                        <p className="info">Discuss fitness goals</p>
                        <hr/>
                        <p className="info">Group trainer</p>
                        <hr/>
                        <p className="info last">Fitness orientation</p>
                    </div>
                </div>
                <div className="card-pseudo">
                    <div className="card">
                    <h3>$65 <span className="slash">/</span> <span className="month">month</span></h3>
                        <p className="head">Pay Every Month</p>
                        <p className="info">Group class</p>
                        <hr/>
                        <p className="info">Group trainer</p>
                        <hr/>
                        <p className="info">Book a group class</p>
                        <hr/>
                        <p className="info last">Fitness orientation</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Pricing;