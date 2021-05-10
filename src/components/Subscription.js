import React from 'react';
import '../App.css';


export const Subscription = () => {
    return (
        <section className="subscription">
            <div className="txt">
                <h2>Subscribe To Our Channel</h2>
                <p className="lead">Flank shank burgdoggen pork belly swine frankfurter kielbasa salami</p>
            </div>

            <div className="form">
                <input placeholder="Email" type="text" className="mail"/>
                <a href="" className="btn">Subscribe</a>
            </div>
        </section>
    )
}

export default Subscription;