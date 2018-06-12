import React, { Component } from 'react';

// components
import NavBar from '../../../components/navBar/NavBar';
import {
    AudiencePage,
    ChannelPage,
    DRMPage,
    ExperiencePage,
    InsightPage,
    StreamPage,
} from '../../screens'

// libraries
import SwipeableViews from 'react-swipeable-views';

// redux
import { connect } from 'react-redux';
import {
    dxLogout as dxLogoutAction,
} from '../../actions';
import { Stream } from 'stream';

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
        title: 'DRM',
        type: 'DRM'
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
            index
        } = this.state;

        return (
            <div>
                <NavBar
                    navArr={navArr}
                    index={this.state.index}
                    handleChange={(index) => this.handleChange(index)}
                    handleLogoutClick={() => this.handleLogoutClick()}
                />
                <SwipeableViews
                    axis='x'
                    index={this.state.index}
                >
                    {
                        index == 0 ? 
                        (<ExperiencePage />)
                        :
                        null
                    }
                    {
                        index == 1 ? 
                        (<ChannelPage />)
                        :
                        null
                    }
                    {
                        index == 2 ? 
                        (<StreamPage />)
                        :
                        null
                    }
                    {
                        index == 3 ? 
                        (<AudiencePage />)
                        :
                        null
                    }
                    {
                        index == 4 ? 
                        (<DRMPage />)
                        :
                        null
                    }
                    {
                        index == 5 ? 
                        (<InsightPage />)
                        :
                        null
                    }
                </SwipeableViews>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {

    }
}

const dispatchToProps = {
    dxLogoutAction,
}

export default connect(stateToProps, dispatchToProps)(HeaderNavigator);