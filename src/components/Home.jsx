import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import userInfo from '../data/User.json';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div className='home-page page op-zero'>
                <h2 className='greeting-text'>
                    {userInfo.home.greeting_text}
                </h2>
                <h1 className='title'>
                    {userInfo.home.title}
                </h1>
                <div className='description'>
                    <h3>{userInfo.home.description_l1}</h3>
                    <h3>
                        {userInfo.home.description_l2}
                       
                    </h3>
                    <h3>{userInfo.home.description_l3}</h3>
                    <h3>
                        <NavLink to='/portfolio/about' className='active-link'>
                            See More >
                        </NavLink>
                    </h3>
                </div>
            </div>
        );
    }
}

export default Home;