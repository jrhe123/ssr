import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import Helmet from 'react-helmet';

// router
import { withRouter } from 'react-router-dom';

// redux
import { connect } from 'react-redux';

// components
import * as Routes from './routes';
import AlertBar from '../components/alertBar/AlertBar';


const LoginRoute
    = ({ isAuthenticated, ...props }) =>
        !isAuthenticated
            ? <Route {...props} />
            : <Redirect to="/dashboard" />;

const ProtectedRoute
    = ({ isAuthenticated, ...props }) =>
        isAuthenticated
            ? <Route {...props} />
            : <Redirect to="/" />;


class App extends Component {

    render() {
        const {
            isAuthenticated,
            alertBar,
        } = this.props;

        return (
            <div>
                {/* SEO */}
                <Helmet
                    htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
                    titleTemplate="%s | DigitalXi - PublishXi "
                    titleAttributes={{ itemprop: 'name', lang: 'en' }}
                    meta={[
                        { name: 'description', content: 'DigitalXi - PublishXi' },
                        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    ]}
                />

                {/* config router */}
                <Switch>
                    <LoginRoute
                        isAuthenticated={isAuthenticated}
                        exact
                        path="/"
                        component={Routes.LoginPage}
                    />
                    <ProtectedRoute
                        isAuthenticated={isAuthenticated}
                        exact
                        path="/Dashboard"
                        component={Routes.DashboardPage}
                    />

                    <Route path="*" render={() => (<Redirect to="/" />)} />
                </Switch>

                {/* global alert bar */}
                <AlertBar
                    alertBar={alertBar}
                />
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        isAuthenticated: state.root.isAuthenticated,
        user: state.root.user,
        alertBar: state.root.alertBar
    }
}

export default withRouter(connect(stateToProps, null)(App));
