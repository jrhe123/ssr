import React, { Component } from 'react';

// components
import DashboardNavigator from '../container/DashboardNavigator';

class Dashboard extends Component {

    render() {

        return (
            <DashboardNavigator 
                history={this.props.history}
            />
        )
    }
}

export default Dashboard;