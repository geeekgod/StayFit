import React from 'react';
import '../App.css';
import play_button from '../img/play-button.png';


export const Classes = () => {
    return (
        <section className="classes">
            <div className="txt-container">
                <h2>Our Classes</h2>
                <p className="lead">Flank shank burgedoggen pork belly swine frankfurter kielbasa salami.</p>
            </div>
            <div className="card-container">
                <div className="card">
                    <div className="overlay">
                        <h3>"Best place to burn fate and <br /> make best fitness"</h3>
                        <div className="play">
                            <img src={play_button} alt=""/>
                            <h4>Play Video</h4>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="overlay second">
                        <h3>"Best place to burn fate and <br /> make best fitness"</h3>
                        <div className="play">
                            <img src={play_button} alt=""/>
                            <h4>Play Video</h4>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="overlay third">
                    <h3>"Best place to burn fate and <br /> make best fitness"</h3>
                    <div className="play">
                            <img src={play_button} alt=""/>
                            <h4>Play Video</h4>
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

export default Classes;