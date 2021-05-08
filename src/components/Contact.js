import React from 'react';
import '../App.css';
import contact_img from '../img/contact.png';

export const Contact = () => {
    return (
        <section className="contact">
            <div className="txt-container">
                <h2>Send Us A Message</h2>
                <p className="lead">Flank shank burgdoggenpork belly swine frankfurter kielbasa salami</p>
            </div>
            <div className="contact-container">
                <div className="form">
                    <div className="name">
                        <input  placeholder="First Name" className ="f_name" type="text"/>
                        <input placeholder="Last Name" type="text" className="l_name"/>
                    </div>
                    <div className="con-details">
                        <input placeholder="Email" type="text" className="email"/>
                        <input placeholder="Phone" type="text" className="phone"/>
                    </div>
                    <input placeholder="Message" type="text" className="message"/>
                    <div className="btn-container">
                        <a href="" className="btn">Send Now</a>
                    </div>
                </div>
                <div className="img-container">
                    <img src={contact_img} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Contact;