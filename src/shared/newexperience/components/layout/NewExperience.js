import React, { Component } from 'react';

// components
import ExperienceNavigator from '../container/ExperienceNavigator';
import ExperiencePanel from '../container/ExperiencePanel';

// constants
import sizes from '../../../styles/sizes';

class NewExperience extends Component {

    handleGoback = () => {
        this.props.history.push('/dashboard');
    }

    render() {

        const {
            mainContainerStyle,
        } = styles;

        return (
            <div>
                <ExperienceNavigator 
                    handleGoback={() => this.handleGoback()}
                />
                <div style={mainContainerStyle}>
                    <ExperiencePanel />
                </div>
            </div>
        )
    }
}

const styles = {

    mainContainerStyle: {
        height: `calc(100vh - ${sizes.headerHeight})`,
        width: '100%',
        minWidth: sizes.dxWidth,
    },

}

export default NewExperience;