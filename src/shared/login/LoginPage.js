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
    dxLogin as dxLoginAction,
} from './actions';

export class LoginPage extends Component {

    handleLoginClick = () => {
        let userName = 'roy@digitalxi.com';
        let password = 'e10adc3949ba59abbe56e057f20f883e';
        this.props.dxLoginAction(userName, password);
    }

    render() {
        return (
            <div>
                <Helmet
                    title="Login"
                />
                <a onClick={() => this.handleLoginClick()}>login</a>
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {

    }
}

const dispatchToProps = {
    dxLoginAction,
}

export default connect(stateToProps, dispatchToProps)(LoginPage);
