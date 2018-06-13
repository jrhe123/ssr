import React, { Component } from 'react';
import Helmet from 'react-helmet';

// redux
import { connect } from 'react-redux';
import {

} from './actions';

export class NewExperiencePage extends Component {

    render() {
        return (
            <div>
                new experience route
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

export default connect(stateToProps, dispatchToProps)(NewExperiencePage);
