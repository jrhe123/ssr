import React, { Component } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import locale from 'date-fns/locale/fr';
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
                <Dashboard />
            </div>
        );
    }
}

export default DashboardPage;
