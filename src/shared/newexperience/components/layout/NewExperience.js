import React, { Component } from 'react';

// components
import ExperienceNavigator from '../container/ExperienceNavigator';

// constants
import sizes from '../../../styles/sizes';

class NewExperience extends Component {

    render() {

        const {
            mainContainerStyle,
        } = styles;

        return (
            <div>
                <ExperienceNavigator />
                <div style={mainContainerStyle}>
                    content list
                </div>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        height: `calc(100vh - ${sizes.headerHeight})`,
        width: '100%',
        backgroundColor: 'red'
    },

}

export default NewExperience;