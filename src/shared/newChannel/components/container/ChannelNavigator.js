import React, { Component } from 'react';

// components
import NavBar from '../../../components/navBar/NavBar';

// redux
import { connect } from 'react-redux';
import {
    dxChannelCreate as dxChannelCreateAction,
} from '../../actions';
import {
    dxAlert as dxAlertAction,
    dxLoading as dxLoadingAction,
} from '../../../actions';

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
        const {
            Channel,
        } = this.props;

        let { IsError, Message } = this.validateChannel(Channel);
        if (IsError) this.props.dxAlertAction(true, IsError, Message);
        if (!IsError) this.props.dxChannelCreateAction(this.props.Channel);
    }

    validateChannel = (channel) => {
        let res = {
            IsError: true,
            Message: '',
        }
        if (channel.ChannelType != '0'
            && channel.ChannelType != '1') {
            res.Message = 'Please enter select channel type';
            return res;
        }
        if (!channel.ChannelColor) {
            res.Message = 'Please enter select channel color';
            return res;
        }
        if (!channel.ChannelName) {
            res.Message = 'Please enter your channel name';
            return res;
        }
        res.IsError = false;
        res.Message = '';
        return res;
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
        Channel: state.newchannel.Channel,
    }
}

const dispatchToProps = {
    dxChannelCreateAction,

    dxAlertAction,
    dxLoadingAction,
}

export default connect(stateToProps, dispatchToProps)(ChannelNavigator);