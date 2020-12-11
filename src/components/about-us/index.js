import React, {useState} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import classnames from 'classnames';

import AwardTab from '../award-tab';
import SkillTab from '../skill-tab';
import AboutTab from '../about-tab';
import AboutService from '../about-service';
import SocialTab from '../social-tab';

import './style.css'

const About = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
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
                    <Nav tabs>
                        <NavItem>
                                <NavLink 
                                    className={classnames({ active: activeTab === '1'})}
                                    onClick={() => {toggle('1'); }}                         
                                >
                                    About
                                </NavLink>
                        </NavItem>
                        <NavItem>
                                <NavLink 
                                    className={classnames({ active: activeTab === '5'})}
                                    onClick={() => {toggle('5'); }}                         
                                >
                                    Skill
                                </NavLink>
                        </NavItem>
                        <NavItem>
                                <NavLink 
                                    className={classnames({ active: activeTab === '2'})}
                                    onClick={() => {toggle('2'); }}                         
                                >
                                    Social Media
                                </NavLink>
                        </NavItem>
                        <NavItem>
                                <NavLink 
                                    className={classnames({ active: activeTab === '3'})}
                                    onClick={() => {toggle('3'); }}                         
                                >
                                    Services
                                </NavLink>
                        </NavItem>
                        <NavItem>
                                <NavLink 
                                    className={classnames({ active: activeTab === '4'})}
                                    onClick={() => {toggle('4'); }}                         
                                >
                                    Award
                                </NavLink>
                        </NavItem>
                    </Nav>
                </div>
                <div className="wpo-about-wrap">
                    <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <AboutTab/>
                            </TabPane>
                            <TabPane tabId="2">
                                <AboutService/>
                            </TabPane>
                            <TabPane tabId="3">
                                <SocialTab/>
                            </TabPane>
                            <TabPane tabId="4">
                                <AwardTab/>
                            </TabPane>
                            <TabPane tabId="5">
                                <SkillTab/>
                            </TabPane>
                    </TabContent>   
                </div>
            </div>
        </div>
    </div>
    )
}

export default About;