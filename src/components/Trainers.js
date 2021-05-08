import React from 'react';
import '../App.css';
import trainers_img_1 from '../img/trainers-1.png';
import trainers_img_2 from '../img/trainers-2.png';
import trainers_img_3 from '../img/trainers-3.png';

export const Trainers = () => {
    return (
        <section className="trainers">
            <div className="txt-container">
                <h2>Our Trainers</h2>
                <p className="lead">Flank shank burgdoggenn pork belly swine trankfurter kielbasa salami</p>
            </div>
            <div className="card-container">
                <div className="card-pseudo">
                    <div className="card">
                        <div className="img-cont">
                            <img src={trainers_img_1} alt="" />
                        </div>
                        <h4>Julia Jones</h4>
                        <p>Body Trainer</p>
                        <div className="social">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div className="card-pseudo">
                    <div className="card">
                    <div className="img-cont">
                            <img src={trainers_img_2} alt="" />
                        </div>
                        <h4>Charles Powers</h4>
                        <p>Gym Trainer</p>
                        <div className="social">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div className="card-pseudo">
                    <div className="card">
                    <div className="img-cont">
                            <img src={trainers_img_3} alt="" />
                        </div>
                        <h4>James Charles</h4>
                        <p>Yoga Trainer</p>
                        <div className="social">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-container">
                <a href="" className="btn">See More</a>
            </div>
        </section>
    )
}

export default Trainers;