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
    dxChannelType as dxChannelTypeAction,
    dxChannelView as dxChannelViewAction,
} from './actions';

export class NewChannelPage extends Component {

    componentDidMount(){
        const history = this.props.history;
        const param = this.props.match.params.param;
        const url = this.props.match.url;

        let isNewChannel = url.match(/new_channel/i);
        let isEditChannel = url.match(/edit_channel/i);

        this.props.dxNavigateHistoryAction(history);

        if (isNewChannel) {
            this.props.dxChannelTypeAction(param);
        }
        if (isEditChannel) {
            this.props.dxChannelViewAction(param);
        }        
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
    dxChannelTypeAction,
    dxChannelViewAction,
}

export default connect(stateToProps, dispatchToProps)(NewChannelPage);