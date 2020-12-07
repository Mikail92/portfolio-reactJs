import React from 'react';

import './style.css'

const Hero = () => {
    return (
        <div className="wpo-hero-style-2">
            <div className="wpo-slide-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-8 slide-caption">
                            <h2 className="wow fadeInLeftSlow" data-wow-delay="0.5s">I’m <span>Mihai</span> Hutan</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.8s">Freelance UI/UX Designer</p>
                            <div className="bg-social wow fadeInUp" data-wow-delay="1.0s">
                                <ul>
                                    <li><a href={"https://9gag.com/"}><i className="ti-dribbble"></i></a></li>
                                    <li><a href={"https://9gag.com/"}><i className="ti-linkedin"></i></a></li>
                                    <li><a href={"https://9gag.com/"}><i className="ti-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-slide-right-img">
                    <div className="slide-img wow fadeInRightSlow" data-wow-duration="2000ms">
                        <img src={"assets/images/slider/hero-shape.png"} alt={"Hero"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;