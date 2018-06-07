import React, { Component } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import locale from 'date-fns/locale/fr';
import Helmet from 'react-helmet';

// redux
import { connect } from 'react-redux';
import { 
    fetchGists as fetchGistsAction,
} from './actions';

// components
import {
	FadeInDiv,
} from '../styles/utils';

export class LoginPage extends Component {

    render() {
        const { gists } = this.props;
        return (
            <div>
                <Helmet
                    title="Login"
                />
                hello world!!
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {
        gists: state.gists.gists
    }
}

const dispatchToPros = { 
    loadGists: fetchGistsAction,
}

export default connect(stateToProps, dispatchToPros)(LoginPage);
