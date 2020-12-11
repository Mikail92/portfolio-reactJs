import React from 'react'
import AwardImg from '../award-img';
import SkillCard from '../skill-card';

import './style.css'

const About = () => {
    return (
    <div className="wpo-about-area">
        <div className="container">
            <div className="col-12">
                <div className="section-title">
                    <h2>About Me</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="about-tab">
                        <ul className="nav nav-tabs">
                            <li className="active"><a data-toggle="tab" href="#About">About</a></li>
                            <li><a data-toggle="tab" href={"#Skill"}>Skill</a></li>
                            <li><a data-toggle="tab" href={"#Services"}>Services</a></li>
                            <li><a data-toggle="tab" href={"#Social"}>Social Media</a></li>
                            <li><a data-toggle="tab" href={"#Award"}>Award</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="wpo-about-wrap">
                        <div className="tab-content">
                            <div id="About" className="tab-pane active">
                                <div className="wpo-about-item">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="wpo-about-img">
                                                <img src={"assets/images/about/about.png"} alt={"About"} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="wpo-about-text">
                                                <h2>I create products not just art</h2>
                                                <p>My name is John Smith. I am a web designer and developer.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                                <a href={"9gag.com"} className="theme-btn">Lets Talk</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Skill" className="tab-pane">
                                <div className="wpo-about-item">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="wpo-counter-grids">
                                                <SkillCard 
                                                    title="Communications Skills"
                                                    data="75"
                                                />
                                                <SkillCard 
                                                    title="Project Management"
                                                    data="90"
                                                />
                                                <SkillCard 
                                                    title="Problem Solving"
                                                    data="65"
                                                />
                                                <SkillCard 
                                                    title="Analitical Abilities"
                                                    data="55"
                                                />
                                                <SkillCard 
                                                    title="Organization"
                                                    data="43"
                                                />
                                                <SkillCard 
                                                    title="Creativity"
                                                    data="82"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Services" className="tab-pane">
                                <div className="wpo-service-item">
                                    <div className="row">
                                       <div className="col-lg-6">
                                           <div className="wpo-service-wrap">
                                                <div className="wpo-services-icon-wrap">
                                                    <div className="wpo-service-icon">
                                                       <i className="fi flaticon-idea"></i>
                                                   </div>
                                                </div>
                                               <div className="wpo-service-text">
                                                   <h2>Product <br /> Design</h2>
                                                   <p>consectetur adipiscing elit, eiusmod tempor incididunt  labore.</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="col-lg-6">
                                           <div className="wpo-service-wrap">
                                                <div className="wpo-services-icon-wrap">
                                                    <div className="wpo-service-icon-2">
                                                       <i className="fi flaticon-files-and-folders"></i>
                                                   </div>
                                                </div>
                                               <div className="wpo-service-text">
                                                   <h2>Web <br /> Design</h2>
                                                   <p>consectetur adipiscing elit, eiusmod tempor incididunt  labore.</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="col-lg-6">
                                           <div className="wpo-service-wrap">
                                                <div className="wpo-services-icon-wrap">
                                                    <div className="wpo-service-icon-3">
                                                       <i className="fi flaticon-artist"></i>
                                                   </div>
                                                </div>
                                               <div className="wpo-service-text">
                                                   <h2>Visual <br /> Design</h2>
                                                   <p>consectetur adipiscing elit, eiusmod tempor incididunt  labore.</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="col-lg-6">
                                           <div className="wpo-service-wrap">
                                                <div className="wpo-services-icon-wrap">
                                                    <div className="wpo-service-icon-4">
                                                       <i className="fi flaticon-man"></i>
                                                   </div>
                                                </div>
                                               <div className="wpo-service-text">
                                                   <h2>Business <br /> Strategy</h2>
                                                   <p>consectetur adipiscing elit, eiusmod tempor incididunt  labore.</p>
                                               </div>
                                           </div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Social" className="tab-pane">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6  custom-grid col-12">
                                        <div className="wpo-social-wrap">
                                            <div className="wpo-social-icon">
                                                <i className="fa fa-facebook"></i>
                                            </div>
                                            <div className="wpo-social-text">
                                                <h2>Facebook</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 custom-grid  col-12">
                                        <div className="wpo-social-wrap">
                                            <div className="wpo-social-icon-2">
                                                <i className="fa fa-instagram" aria-hidden="true"></i>
                                            </div>
                                            <div className="wpo-social-text">
                                                <h2>Instagram</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 custom-grid col-12">
                                        <div className="wpo-social-wrap">
                                            <div className="wpo-social-icon-3">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </div>
                                            <div className="wpo-social-text">
                                                <h2>Twitter</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 custom-grid col-12">
                                        <div className="wpo-social-wrap">
                                            <div className="wpo-social-icon-4">
                                                <i className="fa fa-dribbble" aria-hidden="true"></i>
                                            </div>
                                            <div className="wpo-social-text">
                                                <h2>Dribble</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 custom-grid col-12">
                                        <div className="wpo-social-wrap">
                                            <div className="wpo-social-icon-5">
                                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                                            </div>
                                            <div className="wpo-social-text">
                                                <h2>Linkedin</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 custom-grid col-12">
                                        <div className="wpo-social-wrap">
                                            <div className="wpo-social-icon-6">
                                                <i className="fa fa-behance" aria-hidden="true"></i>
                                            </div>
                                            <div className="wpo-social-text">
                                                <h2>Behance</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Award" className="tab-pane">
                                <div className="wpo-award-wrap">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <AwardImg 
                                                imgUrl="assets/images/about/award1.jpg"
                                                alt="Award"
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <AwardImg 
                                                imgUrl="assets/images/about/award2.jpg"
                                                alt="Award"
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <AwardImg 
                                                imgUrl="assets/images/about/award3.jpg"
                                                alt="Award"
                                            />
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <AwardImg 
                                                imgUrl="assets/images/about/award4.jpg"
                                                alt="Award"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About;