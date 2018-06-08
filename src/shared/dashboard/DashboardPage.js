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

    componentWillMount(){
        let token = localStorage.getItem('token');
        this.props.dxValidateTokenAction(token, 'ac51e815-92f4-4ab4-9d47-8528114ac8e4');
    }

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
                                pathname: '/', state: {
                                    from: this.props.location
                                }
                            }} />
                        )
                }
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {
        location: state.routing.location,
        isAuthenticated: state.root.isAuthenticated,
        user: state.root.user,
    }
}

const dispatchToProps = { 
    dxLogoutAction,
    dxValidateTokenAction,
}

export default connect(stateToProps, dispatchToProps)(DashboardPage);
