import React, { Component } from 'react';
import Helmet from 'react-helmet';

// component
import NewChannel from './components/layout/NewChannel';

// redux
import { connect } from 'react-redux';
import {
    dxNavigateHistory as dxNavigateHistoryAction
} from '../actions';
import {
    dxChannelType as dxChannelTypeAction
} from './actions';

export class NewChannelPage extends Component {

    componentDidMount(){
        const history = this.props.history;
        this.props.dxNavigateHistoryAction(history);
        const channelType = this.props.match.params.param;
        this.props.dxChannelTypeAction(channelType);
    }

    render() {
        return (
            <div>
                <Helmet
                    title="Channel"
                />
                <NewChannel />
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {

    }
}

const dispatchToProps = {
    dxNavigateHistoryAction,
    dxChannelTypeAction
}

export default connect(stateToProps, dispatchToProps)(NewChannelPage);