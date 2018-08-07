import React, { Component } from 'react';
import Helmet from 'react-helmet';

// component
import Dashboard from './components/layout/Dashboard';

// redux
import { connect } from 'react-redux';
import {
    dxNavigateHistory as dxNavigateHistoryAction
} from '../actions';
import {
    dxDashboardNavi as dxDashboardNaviAction,
} from './actions';

export class DashboardPage extends Component {

    componentDidMount(){
        const {
            history
        } = this.props;
        const param = this.props.match.params.param;
        this.props.dxNavigateHistoryAction(history);

        if(param) this.props.dxDashboardNaviAction(param);
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
    dxNavigateHistoryAction,
    dxDashboardNaviAction,
}

export default connect(stateToProps, dispatchToProps)(DashboardPage);
