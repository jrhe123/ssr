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
    dxAlert as dxAlertAction,
} from '../actions';

// components
import * as Routes from './routes';
import AlertBar from '../components/alertBar/AlertBar';
import Loading from '../components/loading/Loading';

// styles
import '../../../assets/css/index.css';

const PublicRoute
    = ({ ...props }) =>
        <Route {...props} />;

const ProtectedRoute
    = ({ isAuthenticated, route, ...props }) =>
        isAuthenticated
            ? <Route {...props} />
            : <Redirect to={"/" + route} />;

const ProtectedRouteWithParams
    = ({ isAuthenticated, route, ...props }) =>
        isAuthenticated
            ? <Route {...props} />
            : <Redirect to={"/" + route + '/' + props.computedMatch.params.param} />;


class App extends Component {

    componentDidMount() {

    }

    handleAlertBarClose = () => {
        this.props.dxAlertAction(false, false, '');
    }

    render() {
        const {
            alertBar,
            isLoading,
        } = this.props;

        return (
            <div>
                {/* SEO */}
                <Helmet
                    htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
                    titleTemplate="%s | DigitalXi - WebApp "
                    titleAttributes={{ itemprop: 'name', lang: 'en' }}
                    meta={[
                        { name: 'description', content: 'DigitalXi - WebApp' },
                        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    ]}
                />

                {/* config router */}
                <Switch>
                    <PublicRoute
                        exact
                        path="/"
                        component={Routes.HomePage}
                    />

                    <Route path="*" render={() => (<Redirect to="/" />)} />
                </Switch>

                {/* global loading spin */}
                <Loading
                    isLoading={isLoading}
                />
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
        user: state.root.user,
        alertBar: state.root.alertBar,
        isLoading: state.root.isLoading,
    }
}

const dispatchToProps = {
    dxAlertAction,
}

export default withRouter(connect(stateToProps, dispatchToProps)(App));
