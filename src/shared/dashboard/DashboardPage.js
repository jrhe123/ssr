import React, { Component } from 'react';
import Helmet from 'react-helmet';

// component
import Dashboard from './components/layout/Dashboard';

export class DashboardPage extends Component {

    render() {
        return (
            <div>
                <Helmet
                    title="Dashboard"
                />
                <Dashboard history={this.props.history}/>
            </div>
        );
    }
}

export default DashboardPage;
