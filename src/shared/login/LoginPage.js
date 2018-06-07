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
        this.props.dxLoginAction();
    }

    render() {
        return (
            <div>
                <Helmet
                    title="Login"
                />
                {
                    this.props.isAuthenticated ?
                        (
                            <Redirect to={{
                                pathname: '/dashboard', state: {}
                            }} />
                        )
                        :
                        (
                            <a onClick={() => this.handleLoginClick()}>login</a>
                        )
                }
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    }
}

const dispatchToProps = {
    dxLoginAction
}

export default connect(stateToProps, dispatchToProps)(LoginPage);
