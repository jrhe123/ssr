import React, { Component } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import locale from 'date-fns/locale/fr';
import Helmet from 'react-helmet';

// redux
import { connect } from 'react-redux';
import { 
    
} from './actions';

// components
import {
	FadeInDiv,
} from '../styles/utils';
import Load from '../components/load/Load';

export class LoginPage extends Component {

    render() {
        return (
            <div>
                <Helmet
                    title="Login"
                />
                <Load 
                    loading={true}
                />
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {
        
    }
}

const dispatchToProps = { 
    
}

export default connect(stateToProps, dispatchToProps)(LoginPage);
