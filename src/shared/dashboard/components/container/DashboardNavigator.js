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
    dxDashboardNavi as dxDashboardNaviAction,
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

    handleLogoutClick = () => {
        this.props.dxLogoutAction();
    }

    handleChange = (index) => {
        this.props.dxDashboardNaviAction(index);
    };

    render() {

        const {
            conentWrapperStyle
        } = styles;

        const {
            NaviIndex
        } = this.props;

        return (
            <div>
                <NavBar
                    isRoute={true}
                    navArr={navArr}
                    index={NaviIndex}
                    handleChange={(index) => this.handleChange(index)}
                    handleLogoutClick={() => this.handleLogoutClick()}
                />
                <SwipeableViews
                    axis='x'
                    index={NaviIndex}
                    style={conentWrapperStyle}
                >
                    {
                        NaviIndex == 0 ?
                            (<Experience />)
                            :
                            null
                    }
                    {
                        NaviIndex == 1 ?
                            (<Channel />)
                            :
                            null
                    }
                    {
                        NaviIndex == 2 ?
                            (<Stream />)
                            :
                            null
                    }
                    {
                        NaviIndex == 3 ?
                            (<Audience />)
                            :
                            null
                    }
                    {
                        NaviIndex == 4 ?
                            (<DRM />)
                            :
                            null
                    }
                    {
                        NaviIndex == 5 ?
                            (<Insight />)
                            :
                            null
                    }
                    {
                        NaviIndex == 6 ?
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
        NaviIndex: state.dashboard.NaviIndex,
    }
}

const dispatchToProps = {
    dxDashboardNaviAction,
    dxLogoutAction,
}

export default connect(stateToProps, dispatchToProps)(DashboardNavigator);