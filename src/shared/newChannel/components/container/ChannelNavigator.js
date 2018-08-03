import React, { Component } from 'react';

// components
import NavBar from '../../../components/navBar/NavBar';

// redux
import { connect } from 'react-redux';
import {
    dxChannelCreate as dxChannelCreateAction,
} from '../../actions';

class ChannelNavigator extends Component {

    componentWillReceiveProps(nextProps) {
        // EXIT
        if (nextProps.IsCompleted && !this.props.IsCompleted) {
            this.props.history.push('/dashboard');
        }
    }

    handleGoback = () => {
        this.props.history.push('/dashboard');
    }

    handleCreateChannel = () => {
        this.props.dxChannelCreateAction(this.props.channel);
    }

    render() {
        return (
            <NavBar
                isRoute={false}
                navType="CHANNEL"
                handleGoback={() => this.handleGoback()}
                handleSaveBtnClick={() => this.handleCreateChannel()}
            />
        )
    }
}

const stateToProps = (state) => {
    return {
        history: state.root.history,
        IsCompleted: state.newchannel.IsCompleted,
        channel: state.newchannel.Channel,
    }
}

const dispatchToProps = {
    dxChannelCreateAction,
}

export default connect(stateToProps, dispatchToProps)(ChannelNavigator);