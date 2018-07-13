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
import {
    dxValidateToken as dxValidateTokenAction,
    dxAlert as dxAlertAction,
} from '../actions';

// components
import * as Routes from './routes';
import AlertBar from '../components/alertBar/AlertBar';

// styles
import '../../../assets/css/index.css';

const LoginRoute
    = ({ isAuthenticated, ...props }) =>
        !isAuthenticated
            ? <Route {...props} />
            : <Redirect to="/dashboard" />;

const ProtectedRoute
    = ({ isAuthenticated, route, ...props }) => 
        isAuthenticated
            ? <Route {...props} />
            : <Redirect to={"/"+route} />;

const ProtectedRouteWithParams
    = ({ isAuthenticated, route, ...props }) => 
        isAuthenticated
            ? <Route {...props} />
            : <Redirect to={"/"+route+'/'+props.computedMatch.params.param} />;

const ProtectedRouteWithParamsV2
    = ({ isAuthenticated, route, ...props }) =>
        isAuthenticated
            ? <Route {...props} />
            : <Redirect to={"/"+route+'/'+props.computedMatch.params.channelType} />;


class App extends Component {

    componentDidMount(){
        let token = localStorage.getItem('token');
        if(token) this.props.dxValidateTokenAction(token, '5f92de5b-e627-43e5-a42f-75f9e4715380')
    }

    handleAlertBarClose = () => {
        this.props.dxAlertAction(false, false, '');
    }

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
                        path="/dashboard"
                        component={Routes.DashboardPage}
                    />

                    <ProtectedRouteWithParams
                        isAuthenticated={isAuthenticated}
                        route="new_experience"
                        exact
                        path="/new_experience/:param(0|1)"
                        component={Routes.NewExperiencePage}
                    />
            
                    <ProtectedRouteWithParamsV2
                        isAuthenticated={isAuthenticated}
                        route="new_channel"
                        exact
                        path="/new_channel/:channelType(0|1)"
                        component={Routes.NewChannelPage}
                    />

                    <Route path="*" render={() => (<Redirect to="/" />)} />
                </Switch>

                {/* global alert bar */}
                <AlertBar
                    alertBar={alertBar}
                    handleAlertBarClose={() => this.handleAlertBarClose()}
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

const dispatchToProps = {
    dxValidateTokenAction,
    dxAlertAction,
}

export default withRouter(connect(stateToProps, dispatchToProps)(App));
