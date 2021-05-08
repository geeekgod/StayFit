import React from 'react'

export const Event = () => {
    return (
        <section className="event">
            <div className="txt-container">
                <h2>Upcoming Events</h2>
                <p className="lead">Flank shank burgdoggen pork belly swine frankfurter kielbasa salami</p>
            </div>
            <div className="card-container">
                <div className="card-pseudo first">
                    <div className="card">
                        <div className="txt">
                            <h4>Summer Team Games <span>2021</span> </h4>
                            <p className="lead">Flank shank burgdoggen pork belly <br /> swine frankfurter kielbasa salami ham andoulli beef ribs chuck. Flank shank burgdoggen pork belly</p>
                            <p className="read">Read More</p>
                        </div>
                        <div className="img-cont"></div>
                    </div>
                </div>
                <div className="card-pseudo second">
                    <div className="card">
                        <div className="txt">
                            <h4>Absolute Summer Activities </h4>
                            <p className="lead">Flank shank burgdoggen pork belly <br /> swine frankfurter kielbasa salami ham andoulli beef ribs chuck. Flank shank burgdoggen pork belly</p>
                            <p className="read">Read More</p>
                        </div>
                        <div className="img-cont"></div>
                    </div>
                </div>
            </div>
            <div className="slider-loc">
                <div className="circle-wrapper">
                    <i class="fas fa-circle active"></i>
                    <i class="fas fa-circle"></i>
                    <i class="fas fa-circle"></i>
                </div>
            </div>
            <div className="btn-container">
                <a href="" className="btn">Show More</a>
            </div>
        </section>
    )
}

export default Event;