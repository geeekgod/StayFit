import React from 'react';
import adidas from '../img/adidas.png';
import nike from '../img/Nike.png';
import reebok from '../img/reebok.png';
import puma from '../img/puma.png';

export const Partners = () => {
    return (
        <section className="partners">
            <div className="img-container">
                <img src={adidas} alt=""/>
                <img src={nike} alt=""/>
                <img src={reebok} alt=""/>
                <img src={puma} alt=""/>
            </div>
        </section>
    )
}
export default Partners;