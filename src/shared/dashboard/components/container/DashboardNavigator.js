import React, { Component } from 'react';

// components
import NavBar from '../../../components/navBar/NavBar';
import Experience from '../layout/Experience';
import Channel from '../layout/Channel';
import Stream from '../layout/Stream';
import Audience from '../layout/Audience';
import DRM from '../layout/DRM';
import Insight from '../layout/Insight';
import Onboard from '../layout/Onboard';

// constants
import sizes from '../../../styles/sizes';

// libraries
import SwipeableViews from 'react-swipeable-views';

// redux
import { connect } from 'react-redux';
import {
    dxLogout as dxLogoutAction,
} from '../../actions';

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
    // {
    //     title: 'Audience',
    //     type: 'AUDIENCE'
    // },
    // {
    //     title: 'DRM',
    //     type: 'DRM'
    // },
    // {
    //     title: 'Insights',
    //     type: 'INSIGHTS'
    // },
    // {
    //     title: 'Onboard',
    //     type: 'ONBOARD'
    // },
];

class DashboardNavigator extends Component {

    state = {
        index: 0,
    };

    handleLogoutClick = () => {
        this.props.dxLogoutAction();
    }

    handleChange = (index) => {
        this.setState({
            index
        });
    };

    render() {

        const {
            conentWrapperStyle
        } = styles;

        const {
            index
        } = this.state;

        return (
            <div>
                <NavBar
                    isRoute={true}
                    navArr={navArr}
                    index={this.state.index}
                    handleChange={(index) => this.handleChange(index)}
                    handleLogoutClick={() => this.handleLogoutClick()}
                />
                <SwipeableViews
                    axis='x'
                    index={this.state.index}
                    style={conentWrapperStyle}
                >
                    {
                        index == 0 ? 
                        (<Experience />)
                        :
                        null
                    }
                    {
                        index == 1 ? 
                        (<Channel />)
                        :
                        null
                    }
                    {
                        index == 2 ? 
                        (<Stream />)
                        :
                        null
                    }
                    {
                        index == 3 ? 
                        (<Audience />)
                        :
                        null
                    }
                    {
                        index == 4 ? 
                        (<DRM />)
                        :
                        null
                    }
                    {
                        index == 5 ? 
                        (<Insight />)
                        :
                        null
                    }
                    {
                        index == 6 ? 
                        (<Onboard />)
                        :
                        null
                    }
                </SwipeableViews>
            </div>
        )
    }
}

const styles = {
    conentWrapperStyle: {
        width: sizes.dxWidth,
        margin: '0 auto',
    }
}

const stateToProps = (state) => {
    return {

    }
}

const dispatchToProps = {
    dxLogoutAction,
}

export default connect(stateToProps, dispatchToProps)(DashboardNavigator);