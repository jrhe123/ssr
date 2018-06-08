import React, { Component } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import locale from 'date-fns/locale/fr';
import Helmet from 'react-helmet';

// router
import { Redirect } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import {
    dxLogout as dxLogoutAction,
    dxValidateToken as dxValidateTokenAction,
} from './actions';

export class DashboardPage extends Component {


    // handleLogoutClick = () => {
    //     this.props.dxLogoutAction();
    // }

    render() {
        return (
            <div>
                <Helmet
                    title="Dashboard"
                />
                dashboard page
                <div>
                    <a onClick={() => this.handleLogoutClick()}>logout</a>
                </div>
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {

    }
}

const dispatchToProps = {
    dxLogoutAction,
    dxValidateTokenAction,
}

export default connect(stateToProps, dispatchToProps)(DashboardPage);
