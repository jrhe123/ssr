import React, { Component } from 'react';
import Helmet from 'react-helmet';

// component
import NewExperience from './components/layout/NewExperience';

export class NewExperiencePage extends Component {

    render() {
        return (
            <div>
                <Helmet
                    title="Experience"
                />
                <NewExperience />
            </div>
        );
    }
}

export default NewExperiencePage;
