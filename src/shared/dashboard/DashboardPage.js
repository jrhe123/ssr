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
    dxLogout as dxLogoutAction
} from './actions';

export class DashboardPage extends Component {

    handleLogoutClick = () => {
        this.props.dxLogoutAction();
    }

    render() {
        return (
            <div>
                <Helmet
                    title="Dashboard"
                />
                {
                    this.props.isAuthenticated ?
                        (
                            <div>
                                <a onClick={() => this.handleLogoutClick()}>logout</a>
                            </div>
                        )
                        :
                        (
                            <Redirect to={{
                                pathname: '/', state: {}
                            }} />
                        )
                }
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {
        isAuthenticated: state.root.isAuthenticated,
        user: state.root.user,
    }
}

const dispatchToProps = { 
    dxLogoutAction,
}

export default connect(stateToProps, dispatchToProps)(DashboardPage);
