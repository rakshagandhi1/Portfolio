import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import userInfo from '../data/User.json';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div className='about-page page'>
                <h1 className='title'>
                    {userInfo.about.title}
                </h1>
                <div className='description'>
                    <h3>{userInfo.about.description_l1}</h3>
                    <h3>{userInfo.about.description_l2}</h3>
                    <h3>{userInfo.about.description_l3}</h3>
                    <h3>{userInfo.about.description_l4}</h3>
                    <h3>{userInfo.about.description_l5}</h3>
                    <h3>{userInfo.about.description_l6}
                        <NavLink to='/portfolio/contact' className='active-link'>
                            {userInfo.about.link_label}
                        </NavLink>
                    </h3>
                </div>
            </div>
        );
    }
}

export default About;

// Designed motivation: https://nad.is/contact