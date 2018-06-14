import React, { Component } from 'react';

// components
import ExperienceNavigator from '../container/ExperienceNavigator';
import ExperienceControl from '../container/ExperienceControl';

// redux
import { connect } from 'react-redux';

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
                    <ExperienceControl />
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

const stateToProps = (state) => {
    return {
        history: state.root.history
    }
}

const dispatchToProps = {

}

export default connect(stateToProps, dispatchToProps)(NewExperience);