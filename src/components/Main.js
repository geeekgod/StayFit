import React from 'react'
import '../App.css';
import Home from './Home';
import Partners from './Partners.js';
import Services from './Services';
import About from './About.js';
import Classes from './Classes.js';
import Trainers from './Trainers.js';
import Pricing from './Pricing.js';
import Contact from './Contact.js';
import Event from './Event.js';
import Subscription from './Subscription.js';
import Footer from './Footer.js';


export const Main = () => {
    return (
        <>
        < Home/>
        < Partners />
        < Services />
        < About/>
        < Classes/>
        < Trainers />
        < Pricing />
        < Contact />
        < Event />
        < Subscription />
        < Footer />
        </>
    )
}
export default Main;