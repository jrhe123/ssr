import React, { Component } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import locale from 'date-fns/locale/fr';
import Helmet from 'react-helmet';

// redux
import { connect } from 'react-redux';
import { 
    
} from './actions';

export class DashboardPage extends Component {

    handleLogoutClick = () => {
        console.log('logout now');
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
                            <div>please login</div>
                        )
                }
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user,
    }
}

const dispatchToProps = { 
    
}

export default connect(stateToProps, dispatchToProps)(DashboardPage);
