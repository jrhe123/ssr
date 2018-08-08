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

// styles
import '../../../../../assets/css/react-reveal/index.css';

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
];

class DashboardNavigator extends Component {

    handleLogoutClick = () => {
        this.props.dxLogoutAction();
    }

    handleChange = (index) => {
        this.props.dxDashboardNaviAction(index);
    };

    renderNav = (nav) => {
        const {
            NaviIndex
        } = this.props;

        let tab;
        if (nav.type == 'EXPERIENCES') {
            tab = <Experience active={NaviIndex == 0 ? true : false} />
        } else if (nav.type == 'CHANNELS') {
            tab = <Channel active={NaviIndex == 1 ? true : false} />
        } else if (nav.type == 'STREAMS') {
            tab = <Stream active={NaviIndex == 2 ? true : false} />
        }
        return tab;
    }

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
                <div style={conentWrapperStyle}>
                    {
                        navArr.map((nav, index) => (
                            this.renderNav(nav)
                        ))
                    }
                </div>
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