import React, { Component } from 'react';
import Helmet from 'react-helmet';

// redux
import { connect } from 'react-redux';
import {

} from './actions';

export class LoginPage extends Component {
    render() {
        return (
            <div>
                <Helmet
                    title="Home"
                />
                my starter
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
