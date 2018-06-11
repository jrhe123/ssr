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

class HeaderNavigator extends Component {

    state = {
        index: 0,
    };

    handleChange = (index) => {
        this.setState({
            index
        });
    };

    render() {

        const {
            index
        } = this.state;

        return (
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
                    {
                        index == 0 ? 
                        (<div>first page</div>)
                        :
                        null
                    }
                    {
                        index == 1 ? 
                        (<div>second page</div>)
                        :
                        null
                    }
                    {
                        index == 2 ? 
                        (<div>third page</div>)
                        :
                        null
                    }
                    {
                        index == 3 ? 
                        (<div>fourth page</div>)
                        :
                        null
                    }
                    {
                        index == 4 ? 
                        (<div>fifth page</div>)
                        :
                        null
                    }
                </SwipeableViews>
            </div>
        )
    }
}

export default HeaderNavigator;