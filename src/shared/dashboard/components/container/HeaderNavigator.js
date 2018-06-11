import React, { Component } from 'react';

// components
import NavBar from '../../../components/navBar/NavBar';

// libraries
import SwipeableViews from 'react-swipeable-views';

const navArr = [
    {
        title: 'Experiences',
        type: 'EXPERIENCES'
    },
    {
        title: 'Channels',
        type: 'CHANNELS'
    },
    {
        title: 'Streams',
        type: 'STREAMS'
    },
    {
        title: 'Audience',
        type: 'AUDIENCE'
    },
    {
        title: 'Insights',
        type: 'INSIGHTS'
    },
];

class HeaderNavigator extends Component{

    state = {
        index: 0,
    };

    handleChange = (index) => {
        this.setState({ 
            index
        });
    };

    render(){

        return(
            <div>
                <NavBar 
                    navArr={navArr}
                    index={this.state.index} 
                    handleChange={(index) => this.handleChange(index)}
                />

                <SwipeableViews
                    axis='x'
                    index={this.state.index}
                >
                    <div>Item One</div>
                    <div>Item Two</div>
                    <div>Item Three</div>
                </SwipeableViews>
            </div>
        )
    }
}

export default HeaderNavigator;