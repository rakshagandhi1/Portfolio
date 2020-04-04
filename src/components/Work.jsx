import React, {Component} from 'react';

import userInfo from '../data/User.json';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div className='work-page page'>
                <h1 className='title'>
                    {userInfo.work.title}
                </h1>
                <div className='description'>
                    <h3>{userInfo.work.description_l1}</h3>
                </div>
            </div>
        );
    }
}

export default Work;