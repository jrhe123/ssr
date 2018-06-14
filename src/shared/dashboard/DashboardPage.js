import React, { Component } from 'react';
import Helmet from 'react-helmet';

// component
import Dashboard from './components/layout/Dashboard';

// redux
import { connect } from 'react-redux';
import {
    dxNavigateHistory as dxNavigateHistoryAction
} from '../actions';

export class DashboardPage extends Component {

    componentDidMount(){
        const {
            history
        } = this.props;
        this.props.dxNavigateHistoryAction(history);
    }

    render() {
        return (
            <div>
                <Helmet
                    title="Dashboard"
                />
                <Dashboard />
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {

    }
}

const dispatchToProps = {
    dxNavigateHistoryAction
}

export default connect(stateToProps, dispatchToProps)(DashboardPage);
